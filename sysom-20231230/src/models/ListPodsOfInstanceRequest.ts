// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodsOfInstanceRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c96e34d74eb6748f3b2a46552d5d653f6
   */
  clusterId?: string;
  /**
   * @remarks
   * The current page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      clusterId: 'cluster_id',
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      clusterId: 'string',
      current: 'number',
      instance: 'string',
      pageSize: 'number',
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

