// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeneralConfigsResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  configDesc?: string;
  /**
   * @example
   * xxx
   */
  configKey?: string;
  /**
   * @example
   * xxx
   */
  configValue?: string;
  /**
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
   * @example
   * NoData
   */
  code?: string;
  data?: ListGeneralConfigsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

