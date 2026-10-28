// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the target quota dimension depends.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the target quota dimension depends.
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
   * The quota dimensions on which the target quota dimension depends.
   */
  dependentDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions[];
  /**
   * @remarks
   * The name of the quota dimension value.
   * 
   * @example
   * cn-hangzhou-b
   */
  name?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * @example
   * cn-hangzhou-b
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
   * The quota dimensions on which the target quota dimension depends.
   */
  dependentDimensions?: string[];
  /**
   * @remarks
   * The key of the quota dimension. Valid values:
   * 
   * - regionId: the region ID.
   * 
   * - zoneId: the zone ID.
   * 
   * - chargeType: the billing method.
   * 
   * - networkType: the network type.
   * 
   * - resourceType: the resource type.
   * 
   * @example
   * zoneId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The details of the quota dimension value.
   */
  dimensionValueDetail?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail[];
  /**
   * @remarks
   * The list of quota dimension values.
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
   * Specifies whether the quota dimension is required when you query quota dimensions. Valid values:
   * 
   * - true: The quota dimension is required.
   * 
   * - false: The quota dimension is optional.
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
   * The maximum number of entries returned for this query.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the position of the returned data. If this parameter is not returned, it indicates that all data has been queried.
   * 
   * @example
   * 84
   */
  nextToken?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
  quotaDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned for this request.
   * 
   * @example
   * 5
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

