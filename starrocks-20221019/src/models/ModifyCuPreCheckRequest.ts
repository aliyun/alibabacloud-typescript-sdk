// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCuPreCheckRequest extends $dara.Model {
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
   * ng-d332aa8bca48****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The number of CUs to which you want to change.
   * 
   * Valid values:
   * 
   * *   2
   * *   4
   * *   8
   * *   16
   * *   32
   * *   64
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeGroupId: 'string',
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

