// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTransferCalleePoolConfigRequestDetails extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 151****0000
   */
  called?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 150****0000
   */
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * *   **roundRobin**
   * *   **random**
   * 
   * This parameter is required.
   * 
   * @example
   * roundRobin
   */
  calledRouteMode?: string;
  /**
   * @remarks
   * The information about the phone numbers for transferring the call.
   * 
   * This parameter is required.
   */
  details?: SetTransferCalleePoolConfigRequestDetails[];
  ownerId?: number;
  /**
   * @remarks
   * The phone number used for transferring the call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 190***
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': SetTransferCalleePoolConfigRequestDetails },
      ownerId: 'number',
      phoneNumber: 'string',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

