// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaidResourceDTO extends $dara.Model {
  /**
   * @example
   * 2025-09-01 00:00:00
   */
  effectiveTime?: string;
  /**
   * @example
   * 2025-09-10 00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * airec-cn-fou41hse8001
   */
  instanceId?: string;
  /**
   * @example
   * 10000
   */
  quantity?: number;
  /**
   * @example
   * 1000
   */
  remainQuantity?: number;
  /**
   * @example
   * AI_ORAL
   */
  resourceCatalogCode?: string;
  resourceCatalogName?: string;
  /**
   * @example
   * PRE_PAID_RECOURSE_PACKAGE
   */
  resourcePackageCode?: string;
  resourcePackageName?: string;
  /**
   * @example
   * ACTIVE
   */
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'effectiveTime',
      expireTime: 'expireTime',
      instanceId: 'instanceId',
      quantity: 'quantity',
      remainQuantity: 'remainQuantity',
      resourceCatalogCode: 'resourceCatalogCode',
      resourceCatalogName: 'resourceCatalogName',
      resourcePackageCode: 'resourcePackageCode',
      resourcePackageName: 'resourcePackageName',
      resourceStatus: 'resourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      expireTime: 'string',
      instanceId: 'string',
      quantity: 'number',
      remainQuantity: 'number',
      resourceCatalogCode: 'string',
      resourceCatalogName: 'string',
      resourcePackageCode: 'string',
      resourcePackageName: 'string',
      resourceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

