// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to restart compute nodes in quick restart mode. Default value: false. Valid values:
   * 
   * *   true: Compute nodes are restarted in quick restart mode in multiple batches. The batches are executed in parallel, and the nodes in each batch are restarted at the same time.
   * *   false: Compute nodes are restarted in rolling restart mode.
   * 
   * @example
   * true
   */
  fastMode?: boolean;
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
   * The number of disks to which you want to change to.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

