// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsInstancesRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The page number for pagination. This field indicates the current page.
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
   * Filters instances by plugin installation status.
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
   * Specifies the agent ID to filter the instance list for the specified agent.
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
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      current: 'current',
      instanceIdName: 'instance_id_name',
      instanceTag: 'instance_tag',
      operationType: 'operation_type',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      region: 'region',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      current: 'number',
      instanceIdName: 'string',
      instanceTag: 'string',
      operationType: 'string',
      pageSize: 'number',
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

