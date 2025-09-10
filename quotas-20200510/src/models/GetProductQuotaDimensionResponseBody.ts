// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail extends $dara.Model {
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
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetProductQuotaDimensionResponseBodyQuotaDimension extends $dara.Model {
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
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The details of the quota dimension value.
   */
  dimensionValueDetail?: GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail[];
  /**
   * @remarks
   * The values of the quota dimension.
   */
  dimensionValues?: string[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * region
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      dimensionValueDetail: 'DimensionValueDetail',
      dimensionValues: 'DimensionValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValueDetail: { 'type': 'array', 'itemType': GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
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

export class GetProductQuotaDimensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the quota dimension.
   */
  quotaDimension?: GetProductQuotaDimensionResponseBodyQuotaDimension;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FA5F0E2-368E-4BA4-A8D0-6060FC6BB8F3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaDimension: 'QuotaDimension',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaDimension: GetProductQuotaDimensionResponseBodyQuotaDimension,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quotaDimension && typeof (this.quotaDimension as any).validate === 'function') {
      (this.quotaDimension as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

