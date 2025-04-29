// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnterpriseSnapshotPolicyRequestStorageRule extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

