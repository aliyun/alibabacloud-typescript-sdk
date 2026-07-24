// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICloudPhoneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20230930123456
   */
  orderId?: number;
  /**
   * @remarks
   * The list of package IDs. After the payment is successful, instances are created based on these IDs through a callback.
   */
  packageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      packageIds: 'PackageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      packageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAICloudPhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   */
  data?: CreateAICloudPhoneResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAICloudPhoneResponseBodyData,
      requestId: 'string',
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

