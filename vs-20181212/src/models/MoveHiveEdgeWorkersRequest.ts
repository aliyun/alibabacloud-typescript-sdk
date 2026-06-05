// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveHiveEdgeWorkersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive-xxxx-xxx-xxx
   */
  hiveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["ew-xxxx"]
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

