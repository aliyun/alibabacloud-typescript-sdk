// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMarketingFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The activity code. You can use the system-generated code or modify it to use a custom code.
   * 
   * @example
   * 1111
   */
  activityCode?: string;
  /**
   * @remarks
   * The activity ID (deprecated).
   * 
   * @example
   * 已弃用
   */
  activityId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityId: 'ActivityId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityId: 'string',
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

