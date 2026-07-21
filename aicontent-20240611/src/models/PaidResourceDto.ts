// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaidResourceDTO extends $dara.Model {
  /**
   * @remarks
   * The time the resource becomes effective.
   * 
   * @example
   * 2025-09-01 00:00:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time the resource expires.
   * 
   * @example
   * 2025-09-10 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * airec-cn-fou41hse8001
   */
  instanceId?: string;
  /**
   * @remarks
   * The total quantity.
   * 
   * @example
   * 10000
   */
  quantity?: number;
  /**
   * @remarks
   * The remaining quantity.
   * 
   * @example
   * 1000
   */
  remainQuantity?: number;
  /**
   * @remarks
   * The code of the resource type.
   * 
   * @example
   * AI_ORAL
   */
  resourceCatalogCode?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * @example
   * 口语评测
   */
  resourceCatalogName?: string;
  /**
   * @remarks
   * The code of the resource package.
   * 
   * @example
   * PRE_PAID_RECOURSE_PACKAGE
   */
  resourcePackageCode?: string;
  /**
   * @remarks
   * The name of the resource package.
   * 
   * @example
   * 智能批改-资源包
   */
  resourcePackageName?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
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

