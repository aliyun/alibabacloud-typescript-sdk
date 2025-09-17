// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number supports card messages. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  queryResult?: QueryMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'QueryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': QueryMobilesCardSupportResponseBodyDataQueryResult },
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryMobilesCardSupportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08C17DFE-2E10-54F4-BAFB-7180039CC217
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMobilesCardSupportResponseBodyData,
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

