// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique receipt ID of the call. You can obtain this ID by calling the [SendCcoSmartCall](https://help.aliyun.com/document_detail/311247.html) operation.
   * 
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @remarks
   * The action initiated by the called number during an intelligent outbound call.
   * 
   * > Currently, only the **parallelBridge** value is supported, which specifies that the action bridges the called number with a call center agent.
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

