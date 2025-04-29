// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateDesignateExecutorsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
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

