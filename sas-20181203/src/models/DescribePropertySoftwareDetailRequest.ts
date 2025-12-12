// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertySoftwareDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether fuzzy search by software name is supported. If you want to use fuzzy search, set the parameter to 1. If you set the parameter to a different value or leave the parameter empty, fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * The timestamp generated when the software update ends. Unit: milliseconds.
   * 
   * @example
   * 1650012695000
   */
  installTimeEnd?: number;
  /**
   * @remarks
   * The timestamp generated when the software update starts. Unit: milliseconds.
   * 
   * @example
   * 1649321495000
   */
  installTimeStart?: number;
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * kernel
   */
  name?: string;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
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
   * The name or IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 3.10.0
   */
  softwareVersion?: string;
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

