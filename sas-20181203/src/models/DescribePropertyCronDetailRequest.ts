// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyCronDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the results to return. Default value: **1**, which indicates that the results start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether fuzzy match is supported for the scheduled task path. Set this parameter to **1** to enable fuzzy match. Other values or an empty value indicate that fuzzy match is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * The token that marks the current position from which to start reading. Leave this parameter empty to start reading from the beginning.
   * 
   * > You do not need to specify this parameter for the first call. The response includes the NextToken value for the second call. Each subsequent response includes the NextToken value for the next call.
   * 
   * @example
   * 1426C575705AE8545E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Settings the number of entries per page in a paging query. Default value: **10**, which indicates that 10 fingerprint entries of scheduled task assets are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server to query.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The path of the scheduled task to query.
   * 
   * @example
   * /etc/cron.d/root
   */
  source?: string;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list data. If you use this parameter, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
   * 
   * @example
   * true
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The account name of the scheduled task to query.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * @example
   * 50d213b4-3a35-427a-b8a5-04b0c7e1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      extend: 'Extend',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      source: 'Source',
      useNextToken: 'UseNextToken',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      extend: 'string',
      nextToken: 'string',
      pageSize: 'number',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      source: 'string',
      useNextToken: 'boolean',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

