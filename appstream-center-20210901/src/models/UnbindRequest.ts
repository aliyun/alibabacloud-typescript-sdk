// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call the [GetConnectionTicket](https://help.aliyun.com/document_detail/609336.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The session ID. You can call the [GetConnectionTicket](https://help.aliyun.com/document_detail/609336.html) operation to obtain the ID.
   * 
   * @example
   * ai-d297eyf83g5ni****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The persistent session ID. You can call the [GetConnectionTicket](https://help.aliyun.com/document_detail/609336.html) operation to obtain the ID.
   * 
   * @example
   * p-0bxls9m3cl7s****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      endUserId: 'EndUserId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      endUserId: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

