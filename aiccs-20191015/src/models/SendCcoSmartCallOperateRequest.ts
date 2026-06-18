// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCcoSmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * Unique receipt ID of the call. This can be obtained from the response of the [SendCcoSmartCall](https://help.aliyun.com/document_detail/311247.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @remarks
   * Specifies the action to be performed for the called number during an Intelligent Outbound Call.  
   * 
   * > Currently, only the **parallelBridge** parameter is supported, which indicates bridging the called number with a call center agent.
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

