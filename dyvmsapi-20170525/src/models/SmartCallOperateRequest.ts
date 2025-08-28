// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique receipt ID of the call. You can call the [SmartCall](https://help.aliyun.com/document_detail/393526.html) operation to obtain the receipt ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 116012854210^1028142****
   */
  callId?: string;
  /**
   * @remarks
   * The action that is initiated to the called number of an outbound robocall.
   * 
   * > Only the value **parallelBridge** is supported. This value indicates that a bridge action is initiated between a called number and an agent of the call center.
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
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

