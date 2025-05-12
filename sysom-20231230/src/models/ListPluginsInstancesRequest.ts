// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  current?: number;
  /**
   * @example
   * i-bpxx
   */
  instanceIdName?: string;
  /**
   * @example
   * {"key":"app","value":"sysom-aliyun-com"}
   */
  instanceTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * install
   */
  operationType?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instanceIdName: 'instance_id_name',
      instanceTag: 'instance_tag',
      operationType: 'operation_type',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instanceIdName: 'string',
      instanceTag: 'string',
      operationType: 'string',
      pageSize: 'number',
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

