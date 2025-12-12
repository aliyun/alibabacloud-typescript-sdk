// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyCronDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether fuzzy search by path to the scheduled task is supported. If you want to use fuzzy search, set the parameter to **1**. If you set the parameter to a different value or leave the parameter empty, fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The path to the scheduled task.
   * 
   * @example
   * /etc/cron.d/root
   */
  source?: string;
  useNextToken?: boolean;
  /**
   * @remarks
   * The username of the account that runs the scheduled task.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server.
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

