// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStateConfigurationResponseBodyStateConfiguration extends $dara.Model {
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
  parameters?: { [key: string]: any };
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
   * {     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponseBody extends $dara.Model {
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
   * The information about the desired-state configuration.
   */
  stateConfiguration?: CreateStateConfigurationResponseBodyStateConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: CreateStateConfigurationResponseBodyStateConfiguration,
    };
  }

  validate() {
    if(this.stateConfiguration && typeof (this.stateConfiguration as any).validate === 'function') {
      (this.stateConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

