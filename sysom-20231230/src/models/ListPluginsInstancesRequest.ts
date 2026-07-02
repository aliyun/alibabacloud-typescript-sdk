// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. This field is present when pagination is used.
   * 
   * @example
   * 5
   */
  current?: number;
  /**
   * @remarks
   * Filters instances by instance ID or instance name. Fuzzy match is supported.
   * 
   * @example
   * i-bpxx
   */
  instanceIdName?: string;
  /**
   * @remarks
   * Filters instances by instance tag.
   * 
   * @example
   * {"key":"app","value":"sysom-aliyun-com"}
   */
  instanceTag?: string;
  /**
   * @remarks
   * Filters instances by plug-in installation status.
   * 
   * This parameter is required.
   * 
   * @example
   * install
   */
  operationType?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the instance list by the specified agent. If this parameter is specified, only instances associated with the specified agent are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * Filters instances by region.
   * 
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

