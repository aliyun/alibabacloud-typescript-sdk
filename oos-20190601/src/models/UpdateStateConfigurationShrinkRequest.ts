// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStateConfigurationShrinkRequest extends $dara.Model {
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
   * The description.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * { "policy": { "ACS:Application": { "Collection": "Enabled" }, "ACS:Network": { "Collection": "Enabled" } } }
   */
  parametersShrink?: string;
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
   * This parameter is required.
   * 
   * @example
   * sc-asfgdhj12345
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "sc"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The resources to be queried.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tagsShrink: 'Tags',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tagsShrink: 'string',
      targets: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

