import { IPropertyPaneConfiguration, PropertyPaneCheckbox, PropertyPaneSlider, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'CompanyCommunicatorAdaptiveCardExtensionStrings';

export class CompanyCommunicatorPropertyPane {
  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: 'General',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneTextField('iconProperty', {
                  label: strings.IconPropertyFieldLabel
                })                     
              ]
            },
            {
              groupName: 'Company Communicator',
              groupFields: [
                PropertyPaneTextField('applicationIdUri', {
                  label: 'Application ID URI'
                }),
                PropertyPaneTextField('resourceEndpoint', {
                  label: 'Resource endpoint'
                }),                
                PropertyPaneTextField('userappid', {
                  label: "Company Communicator Teams User App Id"
                }),
                PropertyPaneCheckbox('teamsDeepLink', {
                  text: "Deep Link to Teams"
                }),
                PropertyPaneSlider('count', {
                  label: 'Message Count',
                  max: 25,
                  min: 1
                }),
                PropertyPaneTextField('aiKey', {
                  label: strings.AppInsightsInstrumentationKeyFieldLabel
                })       
              ]
            },
            {
              groupName: 'Large Card View',
              groupFields: [
                PropertyPaneCheckbox('summary', {
                  text: 'Show Summary field',
                  checked: true
                }),
                PropertyPaneCheckbox('image', {
                  text: 'Show Image field',
                  checked: true
                })
              ]
            },
            {
              groupName: 'Medium Card View',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  multiline: true
                })  
              ]
            }
          ]
        }
      ]
    };
  }
}
