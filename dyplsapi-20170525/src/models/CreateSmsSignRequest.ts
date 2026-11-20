// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * The recipient number.
   * 
   * This parameter is required.
   * 
   * @example
   * 178****3614
   */
  calledNo?: string;
  /**
   * @remarks
   * The customer UID. This parameter is automatically obtained by the system and does not need to be specified.
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * The sender number.
   * 
   * This parameter is required.
   * 
   * @example
   * 150****6539
   */
  callingNo?: string;
  /**
   * @remarks
   * The number pool key.
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request deduplication ID. The maximum length is 20 characters. Ensure the atomicity of the request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNo: 'CalledNo',
      callerParentId: 'CallerParentId',
      callingNo: 'CallingNo',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNo: 'string',
      callerParentId: 'number',
      callingNo: 'string',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
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

