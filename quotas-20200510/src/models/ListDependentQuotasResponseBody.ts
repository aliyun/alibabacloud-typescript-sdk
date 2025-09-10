// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDependentQuotasResponseBodyQuotasDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimensions of the quotas on which the specified quota depends.
   */
  dependentDimension?: string[];
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * @example
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension values.
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
   * The dimensions of the quotas on which the specified quota depends.
   */
  dimensions?: ListDependentQuotasResponseBodyQuotasDimensions[];
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_elastic-network-interfaces
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The relationship percentage between the specified quota and the quotas on which the specified quota depends.
   * 
   * @example
   * 50
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
   * The quotas on which the specified quota depends.
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

