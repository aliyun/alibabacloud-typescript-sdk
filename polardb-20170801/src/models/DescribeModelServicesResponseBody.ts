// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The API key for the model service.
   * 
   * @example
   * xxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The base URL of the upstream service.
   * 
   * @example
   * https://xxxxxx
   */
  baseUrl?: string;
  /**
   * @remarks
   * The time when the model service was created.
   * 
   * @example
   * 2026-03-31T14:40:48Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The cost in points per million input tokens.
   * 
   * @example
   * 10
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The model category.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The model service name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The cost in points per million output tokens.
   * 
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **OpenAI**
   * 
   * - **Anthropic**
   * 
   * - **bailian**: Alibaba Cloud Model Studio.
   * 
   * - **vLLM**
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The cost in points per request.
   * 
   * @example
   * 10
   */
  requestCostPoints?: string;
  /**
   * @remarks
   * The status of the model service.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The vendor of the model service.
   * 
   * @example
   * bailian
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      baseUrl: 'BaseUrl',
      gmtCreated: 'GmtCreated',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      modelCategory: 'ModelCategory',
      modelServiceId: 'ModelServiceId',
      name: 'Name',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
      protocol: 'Protocol',
      requestCostPoints: 'RequestCostPoints',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      gmtCreated: 'string',
      inputCostPointsPerMillion: 'string',
      modelCategory: 'string',
      modelServiceId: 'string',
      name: 'string',
      outputCostPointsPerMillion: 'string',
      protocol: 'string',
      requestCostPoints: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the model services.
   */
  items?: DescribeModelServicesResponseBodyItems[];
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
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of records to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
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
      items: { 'type': 'array', 'itemType': DescribeModelServicesResponseBodyItems },
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

