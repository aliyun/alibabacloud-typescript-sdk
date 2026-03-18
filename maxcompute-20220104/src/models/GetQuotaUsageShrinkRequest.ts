// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageShrinkRequest extends $dara.Model {
  aggMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  from?: number;
  plotTypesShrink?: string;
  productId?: string;
  region?: string;
  subQuotaNickname?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  to?: number;
  yAxisTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'aggMethod',
      from: 'from',
      plotTypesShrink: 'plotTypes',
      productId: 'productId',
      region: 'region',
      subQuotaNickname: 'subQuotaNickname',
      tenantId: 'tenantId',
      to: 'to',
      yAxisTypesShrink: 'yAxisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      from: 'number',
      plotTypesShrink: 'string',
      productId: 'string',
      region: 'string',
      subQuotaNickname: 'string',
      tenantId: 'string',
      to: 'number',
      yAxisTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

