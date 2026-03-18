// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskPerformanceLevelPriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-a7fa8b85ff6bced6
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ng-204ea5d711860b4d
   */
  nodeGroupId?: string;
  /**
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pl2
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

