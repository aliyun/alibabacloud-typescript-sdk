// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDependentQuotasResponseBodyQuotasDimensions extends $dara.Model {
  /**
   * @remarks
   * The quota dimension on which the dependent dimension of the target quota depends.
   */
  dependentDimension?: string[];
  /**
   * @remarks
   * The key of the quota dimension on which the target quota depends.
   * 
   * @example
   * []
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the dependent dimension of the target quota depends.
   */
  dimensionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      dependentDimension: 'DependentDimension',
      dimensionKey: 'DimensionKey',
      dimensionValues: 'DimensionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimension: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dependentDimension)) {
      $dara.Model.validateArray(this.dependentDimension);
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

export class ListDependentQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions on which the target quota depends.
   */
  dimensions?: ListDependentQuotasResponseBodyQuotasDimensions[];
  /**
   * @remarks
   * The abbreviated name of the cloud service.
   * 
   * @example
   * ram
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota on which the target quota depends.
   * 
   * @example
   * q_laxtn4
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The ratio between the target quota and the dependent quota.
   * 
   * @example
   * 100
   */
  scale?: number;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      scale: 'Scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotasDimensions },
      productCode: 'string',
      quotaActionCode: 'string',
      scale: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of quotas on which the target quota depends.
   */
  quotas?: ListDependentQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 920D8A47-26BB-49FA-A09F-F98D7DAA55F3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

