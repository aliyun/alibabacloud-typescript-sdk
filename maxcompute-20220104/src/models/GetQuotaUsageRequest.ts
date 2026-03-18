// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageRequest extends $dara.Model {
  aggMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  from?: number;
  plotTypes?: string[];
  productId?: string;
  region?: string;
  subQuotaNickname?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  to?: number;
  yAxisTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'aggMethod',
      from: 'from',
      plotTypes: 'plotTypes',
      productId: 'productId',
      region: 'region',
      subQuotaNickname: 'subQuotaNickname',
      tenantId: 'tenantId',
      to: 'to',
      yAxisTypes: 'yAxisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      from: 'number',
      plotTypes: { 'type': 'array', 'itemType': 'string' },
      productId: 'string',
      region: 'string',
      subQuotaNickname: 'string',
      tenantId: 'string',
      to: 'number',
      yAxisTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.plotTypes)) {
      $dara.Model.validateArray(this.plotTypes);
    }
    if(Array.isArray(this.yAxisTypes)) {
      $dara.Model.validateArray(this.yAxisTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

