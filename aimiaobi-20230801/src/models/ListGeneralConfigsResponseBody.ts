// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeneralConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration item.
   * 
   * @example
   * xxx
   */
  configDesc?: string;
  /**
   * @remarks
   * The unique identifier of the configuration item.
   * 
   * @example
   * xxx
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * xxx
   */
  configValue?: string;
  /**
   * @remarks
   * The type of the configuration item.
   * 
   * @example
   * CustomSemanticSearch
   */
  configValueType?: string;
  static names(): { [key: string]: string } {
    return {
      configDesc: 'ConfigDesc',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      configValueType: 'ConfigValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDesc: 'string',
      configKey: 'string',
      configValue: 'string',
      configValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneralConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   */
  data?: ListGeneralConfigsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The fault description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
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
      data: { 'type': 'array', 'itemType': ListGeneralConfigsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

