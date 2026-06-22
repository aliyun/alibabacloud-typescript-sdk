// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccesskeyLeakListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. The maximum value of PageSize is 100. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The AccessKey ID that you want to query. Only exact match is supported.
   * 
   * @example
   * yourAccessKeyID
   */
  query?: string;
  /**
   * @remarks
   * The ID of the member account in the resource directory (Alibaba Cloud account).
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The discovery time of the leaked information that you want to query. All AccessKey leak information discovered after this point in time is returned. This parameter is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614155361489
   */
  startTs?: number;
  /**
   * @remarks
   * The processing status of the leaked AccessKey information that you want to query. Valid values:
   * - **pending**: unprocessed
   * - **dealed**: processed.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      query: 'Query',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      startTs: 'StartTs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      query: 'string',
      resourceDirectoryAccountId: 'number',
      startTs: 'number',
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

