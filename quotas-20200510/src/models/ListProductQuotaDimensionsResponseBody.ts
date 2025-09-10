// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions on which the quota dimension that you want to query is dependent.
   */
  dependentDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions },
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependentDimensions)) {
      $dara.Model.validateArray(this.dependentDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensions extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions on which the quota dimension that you want to query is dependent.
   */
  dependentDimensions?: string[];
  /**
   * @remarks
   * The key of the quota dimension. Valid values:
   * 
   * *   regionId: the region ID.
   * *   zoneId: the zone ID.
   * *   chargeType: the billing method.
   * *   networkType: the network type.
   * 
   * @example
   * zoneId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The details about the dimension value.
   */
  dimensionValueDetail?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail[];
  /**
   * @remarks
   * The dimension values.
   */
  dimensionValues?: string[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * Zone
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the quota dimension is required when you query quota dimensions. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  requisite?: boolean;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      dimensionValueDetail: 'DimensionValueDetail',
      dimensionValues: 'DimensionValues',
      name: 'Name',
      requisite: 'Requisite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValueDetail: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      requisite: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dependentDimensions)) {
      $dara.Model.validateArray(this.dependentDimensions);
    }
    if(Array.isArray(this.dimensionValueDetail)) {
      $dara.Model.validateArray(this.dimensionValueDetail);
    }
    if(Array.isArray(this.dimensionValues)) {
      $dara.Model.validateArray(this.dimensionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
  quotaDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaDimensions: 'QuotaDimensions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotaDimensions)) {
      $dara.Model.validateArray(this.quotaDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

