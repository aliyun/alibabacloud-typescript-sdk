// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query based on CreationTime. Specify the time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The sorting method of the results. Valid values:
   * 
   * - **desc** (default): sorts the results in reverse chronological order based on creation time.
   * - **asc**: sorts the results in chronological order based on creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start of the time range to query based on CreationTime. Specify the time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the online editing project. Separate multiple statuses with commas (,). By default, all online editing projects are returned. Valid values:
   * 
   * - **Normal**: Draft.
   * - **Producing**: Being produced.
   * - **Produced**: Produced.
   * - **ProduceFailed**: Failed to be produced.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

