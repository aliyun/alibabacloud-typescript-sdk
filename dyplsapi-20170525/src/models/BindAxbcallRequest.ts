// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAXBCallRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the BX binding relationship.
   * 
   * This parameter is required.
   * 
   * @example
   * 12353
   */
  authId?: string;
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
   * The key of the number pool.
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * The expiration time of the binding relationship. The value must be greater than 0. Unit: seconds. The automatic unbinding time is calculated by adding the binding time and the expiration time.
   * 
   * This parameter is required.
   * 
   * @example
   * 7200
   */
  expiration?: number;
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
   * The phone number of customer A.
   * 
   * This parameter is required.
   * 
   * @example
   * 13*******43
   */
  telA?: string;
  /**
   * @remarks
   * The custom callback parameter.
   * 
   * @example
   * 000
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      expiration: 'Expiration',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telA: 'TelA',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      expiration: 'number',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telA: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

