// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHiveEdgeWorkersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hive-xxxx-xxx-xxx
   */
  hiveId?: string;
  /**
   * @remarks
   * A list of instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"acp-c4b9pbj4fzkagfexv\\", \\"acp-c4b9pbj4fzkagfexw\\"]
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

