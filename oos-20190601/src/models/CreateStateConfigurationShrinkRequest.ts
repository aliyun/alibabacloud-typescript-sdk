// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStateConfigurationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
   * 
   * @example
   * ApplyOnce
   */
  configureMode?: string;
  /**
   * @remarks
   * The description of the desired-state configuration.
   * 
   * @example
   * The region ID.
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {     "policy": {       "ACS:Application": {         "Collection": "Enabled"       },       "ACS:Network": {         "Collection": "Enabled"       }     }   }
   */
  parameters?: string;
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
   * The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the resource group.
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type. Set the value to rate.
   * 
   * This parameter is required.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The resources to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }
   */
  targets?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
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
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      tagsShrink: 'Tags',
      targets: 'Targets',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      tagsShrink: 'string',
      targets: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

