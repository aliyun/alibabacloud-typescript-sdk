// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySpecTypeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * standard
   */
  targetSpecType?: string;
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      targetSpecType: 'TargetSpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      targetSpecType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

