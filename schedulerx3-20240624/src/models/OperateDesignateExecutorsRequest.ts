// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateDesignateExecutorsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of machine addresses to designate.
   * 
   * This parameter is required.
   */
  addressList?: string[];
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
   * The designation type. Valid values:
   * 
   * - **1**: By worker.
   * 
   * - **2**: By label.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The job ID.
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

