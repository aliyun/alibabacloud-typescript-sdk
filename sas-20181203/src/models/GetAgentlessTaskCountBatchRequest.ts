// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentlessTaskCountBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The detection object type. Valid values:
   * 
   * - **1**: host snapshot
   * - **2**: host image
   * - **3**: user snapshot
   * - **4**: user image
   * - **5**: NAS file system
   * - **6**: parallel sandbox
   * - **7**: security fix
   * 
   * @example
   * 3
   */
  targetType?: number;
  /**
   * @remarks
   * The list of resource UUIDs to query. The list can contain 1 to 100 elements.
   * 
   * This parameter is required.
   * 
   * @example
   * ["3bb30859-b3b5-4f28-868f-b0892c98****"]
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      targetType: 'TargetType',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

