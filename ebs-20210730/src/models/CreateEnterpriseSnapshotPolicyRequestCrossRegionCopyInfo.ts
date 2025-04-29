// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions } from "./CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions";


export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
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
   * The list of destination regions.
   */
  regions?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
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

