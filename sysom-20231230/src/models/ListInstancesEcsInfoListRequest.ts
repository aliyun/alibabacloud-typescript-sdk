// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * Type of information to retrieve
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  infoType?: string;
  /**
   * @remarks
   * If this field is specified, the response filters and returns the Agent installation status for the specified instance.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * Management status of the instance
   * 
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @remarks
   * If this parameter is specified, the response filters and returns the instance information list for the corresponding widget.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * Filter instances by area
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'info_type',
      instanceId: 'instance_id',
      managedType: 'managed_type',
      pluginId: 'plugin_id',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      instanceId: 'string',
      managedType: 'string',
      pluginId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

