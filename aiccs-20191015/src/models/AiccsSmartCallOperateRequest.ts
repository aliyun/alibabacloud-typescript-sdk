// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * Unique receipt ID of the call. You can obtain it by invoking [SendCcoSmartCall](https://help.aliyun.com/document_detail/311247.html).
   * 
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @remarks
   * Specifies the action to be initiated for the called number during an Intelligent outbound call.
   * 
   * > Currently, only the **parallelBridge** parameter is supported, which indicates bridging the called number with a call center agent.
   * 
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @remarks
   * Extension field.
   * 
   * @example
   * Param
   */
  param?: string;
  /**
   * @remarks
   * Product name. Default value: **aiccs**.
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

