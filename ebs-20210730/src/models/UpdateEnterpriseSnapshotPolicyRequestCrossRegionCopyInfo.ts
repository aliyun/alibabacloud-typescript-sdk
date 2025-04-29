// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions } from "./UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions";


export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Destination region information.
   */
  regions?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

