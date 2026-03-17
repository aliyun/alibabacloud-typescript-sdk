// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase extends $dara.Model {
  activeStatus?: string;
  databaseName?: string;
  detail?: string;
  host?: string;
  serviceName?: string;
  sqlPort?: number;
  static names(): { [key: string]: string } {
    return {
      activeStatus: 'ActiveStatus',
      databaseName: 'DatabaseName',
      detail: 'Detail',
      host: 'Host',
      serviceName: 'ServiceName',
      sqlPort: 'SqlPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeStatus: 'string',
      databaseName: 'string',
      detail: 'string',
      host: 'string',
      serviceName: 'string',
      sqlPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBodyHanaDatabases extends $dara.Model {
  hanaDatabase?: DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase[];
  static names(): { [key: string]: string } {
    return {
      hanaDatabase: 'HanaDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaDatabase: { 'type': 'array', 'itemType': DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.hanaDatabase)) {
      $dara.Model.validateArray(this.hanaDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  hanaDatabases?: DescribeHanaDatabasesResponseBodyHanaDatabases;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAAB6A29-34EB-5F56-962F-D5BDBFE8A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaDatabases: 'HanaDatabases',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaDatabases: DescribeHanaDatabasesResponseBodyHanaDatabases,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaDatabases && typeof (this.hanaDatabases as any).validate === 'function') {
      (this.hanaDatabases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

