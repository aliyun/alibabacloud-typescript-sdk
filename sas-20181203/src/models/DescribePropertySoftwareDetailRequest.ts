// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertySoftwareDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Set which page of the returned results to start displaying the query results. The default value is **1**, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether the software name supports fuzzy search. To enable fuzzy search, set the value of this parameter to 1; other values or an empty value indicate that fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * The timestamp when the software update ended. Unit: milliseconds.
   * 
   * @example
   * 1650012695000
   */
  installTimeEnd?: number;
  /**
   * @remarks
   * The timestamp when the software update started. Unit: milliseconds.
   * 
   * @example
   * 1649321495000
   */
  installTimeStart?: number;
  /**
   * @remarks
   * The name of the software to be queried.
   * 
   * @example
   * kernel
   */
  name?: string;
  /**
   * @remarks
   * Used to mark the starting position for reading. Leave it blank to start from the beginning.
   * 
   * > For the first call, you do not need to fill this in; the response will include the NextToken for the second call, and each subsequent call\\"s response will contain the NextToken for the next call.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Set the number of software asset fingerprint information items displayed per page during pagination. The default value is **10**, indicating that 10 items of software asset fingerprint information are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The installation path of the software.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * The name or IP address of the server to be queried.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The version information of the software.
   * 
   * @example
   * 3.10.0
   */
  softwareVersion?: string;
  /**
   * @remarks
   * Whether to use the NextToken method to pull asset list data. If this parameter is used, TotalCount will no longer be returned. Values:
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
   * The UUID of the server.
   * 
   * @example
   * 50d213b4-3a35-427a-b8a5-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      extend: 'Extend',
      installTimeEnd: 'InstallTimeEnd',
      installTimeStart: 'InstallTimeStart',
      name: 'Name',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      path: 'Path',
      remark: 'Remark',
      softwareVersion: 'SoftwareVersion',
      useNextToken: 'UseNextToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      extend: 'string',
      installTimeEnd: 'number',
      installTimeStart: 'number',
      name: 'string',
      nextToken: 'string',
      pageSize: 'number',
      path: 'string',
      remark: 'string',
      softwareVersion: 'string',
      useNextToken: 'boolean',
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

