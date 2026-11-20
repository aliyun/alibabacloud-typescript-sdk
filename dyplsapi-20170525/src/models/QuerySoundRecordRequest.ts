// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySoundRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The call ID, which uniquely identifies a call.
   * 
   * This parameter is required.
   * 
   * @example
   * ac445343254
   */
  callId?: string;
  /**
   * @remarks
   * The customer UID. This parameter is automatically retrieved by the system and does not need to be specified.
   * 
   * @example
   * -
   */
  callerParentId?: number;
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
      callId: 'CallId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callerParentId: 'number',
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

