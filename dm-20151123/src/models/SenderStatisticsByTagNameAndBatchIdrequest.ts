// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsByTagNameAndBatchIDRequest extends $dara.Model {
  /**
   * @remarks
   * Sending address. If not filled, it represents all addresses.
   * 
   * @example
   * xxx
   */
  accountName?: string;
  /**
   * @remarks
   * End time, which cannot exceed 7 days from the start time, in the format yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time, in the format yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * Email tag. If not filled, it represents all tags.
   * 
   * @example
   * xxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      endTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

