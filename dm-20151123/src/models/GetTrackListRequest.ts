// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListRequest extends $dara.Model {
  /**
   * @remarks
   * Sender address.
   * 
   * > If not filled, it represents all addresses; if TagName is provided, this parameter must not be empty.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * End time, the span between start and end time cannot exceed 7 days. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * For the first query, set to 0; for subsequent queries, fixed at 1. 1 indicates pagination in ascending order by time. (This field is deprecated)
   * 
   * @example
   * (This field is deprecated)
   */
  offset?: string;
  /**
   * @remarks
   * Used for pagination. Not set for the first query, but for subsequent queries, it should be set to the value of OffsetCreateTime from the previous response. (This field is deprecated)
   * 
   * @example
   * (This field is deprecated)
   */
  offsetCreateTime?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * (This field is deprecated)
   */
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time, which cannot be earlier than 30 days. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * Tag name
   * 
   * @example
   * tagname
   */
  tagName?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * (This field is deprecated)
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      endTime: 'EndTime',
      offset: 'Offset',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      endTime: 'string',
      offset: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tagName: 'string',
      total: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

