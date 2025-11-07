// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstancePackageStateShrinkRequest extends $dara.Model {
  configurationInfo?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   uninstall
   * *   install
   * 
   * This parameter is required.
   * 
   * @example
   * install
   */
  configureAction?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameters for installing or uninstalling the extensions.
   * 
   * @example
   * {"username": "xx"}
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
   * The name of the template.
   * 
   * This parameter is required.
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
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configurationInfo: 'ConfigurationInfo',
      configureAction: 'ConfigureAction',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationInfo: 'string',
      configureAction: 'string',
      instanceId: 'string',
      parametersShrink: 'string',
      regionId: 'string',
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

