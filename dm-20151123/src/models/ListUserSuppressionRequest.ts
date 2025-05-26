// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSuppressionRequest extends $dara.Model {
  /**
   * @remarks
   * Email address or domain name
   * 
   * @example
   * test@example.net
   */
  address?: string;
  /**
   * @remarks
   * End time of the last bounce hit, timestamp, accurate to the second. The span between start and end times cannot exceed 7 days.
   * 
   * @example
   * 1715669077
   */
  endBounceTime?: number;
  /**
   * @remarks
   * End creation time, timestamp, accurate to the second. The span between start and end times cannot exceed 7 days.
   * 
   * @example
   * 1715669077
   */
  endCreateTime?: number;
  ownerId?: number;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time of the last bounce hit, timestamp, accurate to the second.
   * 
   * @example
   * 1715668852
   */
  startBounceTime?: number;
  /**
   * @remarks
   * Start creation time, timestamp, accurate to the second.
   * 
   * @example
   * 1715668852
   */
  startCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endBounceTime: 'EndBounceTime',
      endCreateTime: 'EndCreateTime',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startBounceTime: 'StartBounceTime',
      startCreateTime: 'StartCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endBounceTime: 'number',
      endCreateTime: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startBounceTime: 'number',
      startCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

