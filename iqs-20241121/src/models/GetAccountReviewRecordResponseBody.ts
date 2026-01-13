// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountReviewRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 杭州
   */
  address?: string;
  /**
   * @example
   * 123123213123
   */
  aliUid?: string;
  /**
   * @example
   * 申请服务
   */
  applyType?: string;
  /**
   * @example
   * 18987236721
   */
  contactName?: string;
  /**
   * @example
   * 测试商品
   */
  instanceId?: string;
  /**
   * @example
   * 123214889322
   */
  phone?: string;
  /**
   * @example
   * 30
   */
  productName?: string;
  /**
   * @example
   * 张三
   */
  qps?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6788a2c2-157d4ebe-ad979cd4f296
   */
  requestId?: string;
  /**
   * @example
   * 测试
   */
  sceneDesc?: string;
  scopes?: string[];
  /**
   * @example
   * 测试
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      aliUid: 'aliUid',
      applyType: 'applyType',
      contactName: 'contactName',
      instanceId: 'instanceId',
      phone: 'phone',
      productName: 'productName',
      qps: 'qps',
      requestId: 'requestId',
      sceneDesc: 'sceneDesc',
      scopes: 'scopes',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      aliUid: 'string',
      applyType: 'string',
      contactName: 'string',
      instanceId: 'string',
      phone: 'string',
      productName: 'string',
      qps: 'number',
      requestId: 'string',
      sceneDesc: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

