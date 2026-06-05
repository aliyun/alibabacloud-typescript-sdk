// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelHiveEdgeWorkersShrinkRequest extends $dara.Model {
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
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

