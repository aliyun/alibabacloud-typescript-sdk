// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  privateBucket?: boolean;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-22T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      privateBucket: 'PrivateBucket',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      startTime: 'StartTime',
      streamId: 'StreamId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      privateBucket: 'boolean',
      sortBy: 'string',
      sortDirection: 'string',
      startTime: 'string',
      streamId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

