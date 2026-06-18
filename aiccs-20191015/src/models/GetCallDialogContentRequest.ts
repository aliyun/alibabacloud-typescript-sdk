// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDialogContentRequest extends $dara.Model {
  /**
   * @remarks
   * The outbound call date, in yyyy-MM-dd format. You can only query data from the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-06
   */
  callDate?: string;
  /**
   * @remarks
   * The unique identifier for a call.
   * 
   * > The LlmSmartCall API returns this ID in the CallId parameter of its response.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456^123478
   */
  callId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callDate: 'CallDate',
      callId: 'CallId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDate: 'string',
      callId: 'string',
      ownerId: 'number',
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

