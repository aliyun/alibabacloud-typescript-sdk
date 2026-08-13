// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCuRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to restart the instance in fast restart mode. The default value is false.
   * 
   * - true: Restarts the compute nodes in fast restart mode. The compute nodes are restarted in batches. Nodes within a batch are restarted in parallel, and batches are processed sequentially.
   * 
   * - false: Restarts the compute nodes in rolling restart mode.
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
   * The compute group ID.
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
   * The target number of CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
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

