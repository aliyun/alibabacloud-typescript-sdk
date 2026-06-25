// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourcesResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * Data source connection parameters.
   * 
   * @example
   * {"host":"rm-bp1f03mxxxxx.mysql.rds.aliyuncs.com","port":3306,"userName":"test01","database":"test01","other":{"useSSL":"false"}}
   */
  connectionParams?: string;
  /**
   * @remarks
   * DataSource ID.
   * 
   * @example
   * 145
   */
  datasourceId?: number;
  /**
   * @remarks
   * Job description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * job01
   */
  name?: string;
  /**
   * @remarks
   * Specific pronunciation rule Type. Options:
   * 
   * - replacement: A rule that directly replaces Word with Pronunciation.
   * 
   * @example
   * target
   */
  type?: number;
  /**
   * @remarks
   * Updater.
   * 
   * @example
   * 1827811800555555
   */
  updater?: string;
  static names(): { [key: string]: string } {
    return {
      connectionParams: 'ConnectionParams',
      datasourceId: 'DatasourceId',
      description: 'Description',
      name: 'Name',
      type: 'Type',
      updater: 'Updater',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionParams: 'string',
      datasourceId: 'number',
      description: 'string',
      name: 'string',
      type: 'number',
      updater: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Maximum Data Volume to read in this request. Default Value is 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * When the data matching the query conditions has not been fully read, the server returns a nextToken. You can use this nextToken to continue reading subsequent data. This parameter is not required for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListDatasourcesResponseBodyDataRecords[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListDatasourcesResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListDatasourcesResponseBodyData;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded.
   * - **true**: The invocation succeeded.
   * - **false**: Failed to invoke.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDatasourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

