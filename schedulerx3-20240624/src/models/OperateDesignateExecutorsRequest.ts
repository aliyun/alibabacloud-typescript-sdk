// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateDesignateExecutorsRequest extends $dara.Model {
  /**
   * @remarks
   * The address list.
   * 
   * This parameter is required.
   */
  addressList?: string[];
  appGroupId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the designated machine. Valid values:
   * - **1**: designated worker.
   * - **2**: designated label.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * Specifies whether to enable failover.
   * 
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      clusterId: 'ClusterId',
      designateType: 'DesignateType',
      jobId: 'JobId',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      appGroupId: 'number',
      appName: 'string',
      clusterId: 'string',
      designateType: 'number',
      jobId: 'number',
      transferable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

