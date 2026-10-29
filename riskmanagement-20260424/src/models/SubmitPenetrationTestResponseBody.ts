// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPenetrationTestResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **EIP**: the public IP address of a VPC.
   * - **SLB**: load balancing.
   * - **ECS**: the public IP address of an ECS instance in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 10.0.xxx.58
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPenetrationTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  list?: SubmitPenetrationTestResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SubmitPenetrationTestResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPenetrationTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SubmitPenetrationTestResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67BD8435-6624-5484-A75D-170231B51615
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitPenetrationTestResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

