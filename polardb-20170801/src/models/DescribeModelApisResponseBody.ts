// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelApisResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The model category. Valid values:
   * 
   * - **text**
   * 
   * - **embedding**
   * 
   * - **rerank**
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The Model API ID.
   * 
   * @example
   * mi-xxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The Model API name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The API path prefix.
   * 
   * @example
   * tests/models/
   */
  pathPrefix?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **openai**
   * 
   * - **anthropic**
   * 
   * - **bailian**
   * 
   * - **vllm**
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The number of input records.
   * 
   * @example
   * 10
   */
  recordInput?: string;
  /**
   * @remarks
   * The number of output records.
   * 
   * @example
   * 10
   */
  recordOutput?: string;
  /**
   * @remarks
   * A JSON array of routing rules, formatted as a string.
   * 
   * @example
   * [
   *   {
   *     "RuleName": "string",
   *     "FallbackMode": "failover",
   *     "MatchModelListJson": "[]",
   *     "providerBalancerAlgorithm": "round-robin",
   *     "Providers": [
   *       {
   *         "ModelServiceName": "string",
   *         "Weight": "0",
   *         "model_protocol": "vllm"
   *         "ModelList": "[]"
   *       }
   *     ],
   *     "FallbackProviders": [
   *       {
   *         "ModelServiceName": "string",
   *         "model_protocol": "anthropic",
   *         "Weight": "10",
   *         "ModelList": "[]"
   *       }
   *     ]
   *   }
   * ]
   */
  routeRules?: string;
  /**
   * @remarks
   * The Model API status.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gmtCreated: 'GmtCreated',
      modelApiId: 'ModelApiId',
      name: 'Name',
      pathPrefix: 'PathPrefix',
      protocol: 'Protocol',
      recordInput: 'RecordInput',
      recordOutput: 'RecordOutput',
      routeRules: 'RouteRules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      gmtCreated: 'string',
      modelApiId: 'string',
      name: 'string',
      pathPrefix: 'string',
      protocol: 'string',
      recordInput: 'string',
      recordOutput: 'string',
      routeRules: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of Model API objects.
   */
  items?: DescribeModelApisResponseBodyItems[];
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
   * The number of records returned on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of records to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C61892A4-0850-4516-9E26-44D96C1782DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the query.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeModelApisResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

