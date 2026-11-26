// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCcoSmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique receipt ID of the call. You can obtain this ID from the response of the [SendCcoSmartCall](https://help.aliyun.com/document_detail/311247.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @remarks
   * The action to be initiated by the called number during the intelligent outbound call.
   * 
   * > Currently, only the **parallelBridge** value is supported, which specifies that the action is to bridge the called number with a call center agent.
   * 
   * This parameter is required.
   * 
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * Param
   */
  param?: string;
  /**
   * @remarks
   * The product name. Default value: **aiccs**.
   * 
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

