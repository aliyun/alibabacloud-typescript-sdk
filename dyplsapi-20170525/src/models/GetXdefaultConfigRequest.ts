// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXDefaultConfigRequest extends $dara.Model {
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
  /**
   * @remarks
   * The X number.
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

