// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelApisResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * * **text**
   * * **embedding**
   * * **rerank**
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The gateway retry configuration.
   * 
   * @example
   * {"failover":{"enabled":true,"max_provider_retries":2,"max_failover_providers":1,"retryable_status_codes":[429,500,502,503,504],"retry_delay":0.5}}
   */
  config?: string;
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
   * The IDs of the model APIs.
   * 
   * @example
   * mi-xxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The name of the model API.
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
   * * **openai**
   * * **anthropic**
   * * **bailian**
   * * **vllm**
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The number of input points.
   * 
   * @example
   * 10
   */
  recordInput?: string;
  /**
   * @remarks
   * The number of output points.
   * 
   * @example
   * 10
   */
  recordOutput?: string;
  /**
   * @remarks
   * The list of routing rules, formatted as a JSON array string.
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
   * The status of the model API.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
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
      config: 'string',
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
   * The list of model APIs.
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
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C61892A4-0850-4516-9E26-44D96C1782DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

