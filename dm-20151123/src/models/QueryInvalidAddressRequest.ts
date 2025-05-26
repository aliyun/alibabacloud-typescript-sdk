// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInvalidAddressRequest extends $dara.Model {
  /**
   * @remarks
   * End time, with a span from the start time that cannot exceed 30 days, in the format yyyy-MM-dd.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * Keyword. If not provided, it represents all invalid addresses.
   * 
   * @example
   * info
   */
  keyWord?: string;
  /**
   * @remarks
   * Number of items per request.
   * 
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * Request starting position.
   * 
   * @example
   * ***
   */
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time, which cannot be earlier than 30 days ago, in the format yyyy-MM-dd.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyWord: 'KeyWord',
      length: 'Length',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keyWord: 'string',
      length: 'number',
      nextStart: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

