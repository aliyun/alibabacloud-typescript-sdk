// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStateConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AHJKH-AHKJHDJK-AKHDIOWJL
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * ["sc-asfgdhj12345"]
   */
  stateConfigurationIds?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the latest version of the template is used.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stateConfigurationIds: 'StateConfigurationIds',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stateConfigurationIds: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

