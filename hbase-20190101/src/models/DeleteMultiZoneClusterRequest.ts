// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the multi-zone cluster to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * d-t4nn71xa0yn56****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately delete the instance. By default, the instance is moved to the recycle bin and permanently deleted after 7 days. Valid values:
   * - true: Immediately deletes the instance without moving it to the recycle bin. Use this option with caution.
   * - false: Moves the instance to the recycle bin. This is the default value.
   * 
   * @example
   * false
   */
  immediateDeleteFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      immediateDeleteFlag: 'ImmediateDeleteFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      immediateDeleteFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

