// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskPerformanceLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The warehouse ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  promotionOptionNo?: string;
  /**
   * @remarks
   * The disk performance level to which you want to change.
   * 
   * Valid values:
   * 
   * *   pl0
   * *   pl1
   * *   pl2
   * *   pl3
   * 
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

