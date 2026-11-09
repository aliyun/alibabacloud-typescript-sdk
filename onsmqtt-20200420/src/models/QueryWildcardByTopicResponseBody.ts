// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWildcardByTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 20
   */
  limit?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 1
   */
  total?: string;
  /**
   * @remarks
   * The wildcard list.
   */
  wildcardList?: string[];
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      total: 'Total',
      wildcardList: 'WildcardList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'string',
      total: 'string',
      wildcardList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.wildcardList)) {
      $dara.Model.validateArray(this.wildcardList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWildcardByTopicResponseBody extends $dara.Model {
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
   * The dataset of parent topic information.
   */
  data?: QueryWildcardByTopicResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8CC04203-679B-4DED-89D9-E7C2E979****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      code: 'number',
      data: QueryWildcardByTopicResponseBodyData,
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

