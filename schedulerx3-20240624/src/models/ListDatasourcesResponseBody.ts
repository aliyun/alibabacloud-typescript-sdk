// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourcesResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The connection parameters of the data source.
   * 
   * @example
   * {"host":"rm-bp1f03mxxxxx.mysql.rds.aliyuncs.com","port":3306,"userName":"test01","database":"test01","other":{"useSSL":"false"}}
   */
  connectionParams?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 145
   */
  datasourceId?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * job01
   */
  name?: string;
  /**
   * @remarks
   * The specific pronunciation rule type. Valid values:
   * - replacement: A rule that directly replaces a word with its pronunciation.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The updater.
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
   * The maximum number of entries to return for this request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If the data that meets the query conditions is not completely read, the server returns this token. You can use this token to continue reading the subsequent data. You do not need to specify this parameter for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of data source records on the current page.
   */
  records?: ListDatasourcesResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
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
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListDatasourcesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

