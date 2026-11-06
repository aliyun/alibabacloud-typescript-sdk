// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service.
   * 
   * @example
   * 6c4b1f0317cd4fd7a5b446d3503d**
   */
  apiKey?: string;
  /**
   * @remarks
   * The upstream service URL.
   * 
   * @example
   * https://xxxxxx
   */
  baseUrl?: string;
  /**
   * @remarks
   * The creation time of the model.
   * 
   * @example
   * 2026-03-31T14:40:48Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The input cost in points per million.
   * 
   * @example
   * 10
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The category.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The IDs of the model services.
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
   * The output cost in points per million.
   * 
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
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
   * The request cost in points.
   * 
   * @example
   * 10
   */
  requestCostPoints?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The model service provider.
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
   * The list of model services.
   */
  items?: DescribeModelServicesResponseBodyItems[];
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
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 
   * * **30**
   * * **50**
   * * **100**
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
   * The total number of entries.
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

