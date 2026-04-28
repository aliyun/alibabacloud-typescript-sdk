// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServicesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  apiKey?: string;
  /**
   * @example
   * https://xxxxxx
   */
  baseUrl?: string;
  /**
   * @example
   * 2026-03-31T14:40:48Z
   */
  gmtCreated?: string;
  /**
   * @example
   * 10
   */
  inputCostPointsPerMillion?: string;
  /**
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @example
   * 10
   */
  requestCostPoints?: string;
  /**
   * @example
   * Enable
   */
  status?: string;
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
  items?: DescribeModelServicesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
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

