// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The type of information to retrieve.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  infoType?: string;
  /**
   * @remarks
   * Specifies the instance ID to filter the Agent installation status of the specified instance.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * The management status of the instance.
   * 
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @remarks
   * Specifies the component ID to filter the instance information list for the corresponding component.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * The region used to filter instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      infoType: 'info_type',
      instanceId: 'instance_id',
      managedType: 'managed_type',
      pluginId: 'plugin_id',
      region: 'region',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      infoType: 'string',
      instanceId: 'string',
      managedType: 'string',
      pluginId: 'string',
      region: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

