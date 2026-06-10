// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This field exists when paging is used and indicates the current page number.
   * 
   * @example
   * 5
   */
  current?: number;
  /**
   * @remarks
   * Filter by instance ID or instance name. Fuzzy query is supported.
   * 
   * @example
   * i-bpxx
   */
  instanceIdName?: string;
  /**
   * @remarks
   * Filter by instance tags.
   * 
   * @example
   * {"key":"app","value":"sysom-aliyun-com"}
   */
  instanceTag?: string;
  /**
   * @remarks
   * Filter instances by plugin installation status.
   * 
   * This parameter is required.
   * 
   * @example
   * install
   */
  operationType?: string;
  /**
   * @remarks
   * Page size. Default value is 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * If this parameter is specified, the response filters and returns the instance list for the specified agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * Filter instances by area.
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

