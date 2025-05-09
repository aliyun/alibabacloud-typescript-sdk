// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStateConfigurationResponseBodyStateConfiguration extends $dara.Model {
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
   * The time when the configuration was created.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the desired-state configuration.
   * 
   * @example
   * collect inventory data
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
   * The CRON expression.
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
   * StateConfigurationId
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
   * t-1234asadf
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
   * The name of the template version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * 2021-03-22T03:13:32Z
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

