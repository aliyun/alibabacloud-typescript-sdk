// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStateConfigurationsResponseBodyStateConfigurations extends $dara.Model {
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * @example
   * ApplyAndAutoCorrect
   */
  configureMode?: string;
  /**
   * @remarks
   * The time when the desired-state configuration was created.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Collect inventory data
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {"policy": {"ACS:Network": {"Collection": "Enabled"}, "ACS:Application": {"Collection": "Enabled"}}}
   */
  parameters?: string;
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
   * The schedule expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * sc-a538febe18fabcdef
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The queried resources.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-ajshjalscfhjk2214
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * 2021-04-22T03:13:32Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
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

export class ListStateConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAASO3cL82+b5iji7bfPNpMh8=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the desired-state configurations.
   */
  stateConfigurations?: ListStateConfigurationsResponseBodyStateConfigurations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stateConfigurations: 'StateConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stateConfigurations: { 'type': 'array', 'itemType': ListStateConfigurationsResponseBodyStateConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.stateConfigurations)) {
      $dara.Model.validateArray(this.stateConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

