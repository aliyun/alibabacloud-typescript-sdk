// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaConvertJobsRequest extends $dara.Model {
  /**
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  nextPageToken?: string;
  /**
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

