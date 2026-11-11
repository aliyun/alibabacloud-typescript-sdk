// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerProtectionRequest extends $dara.Model {
  clientToken?: string;
  deletionProtectionEnabled?: boolean;
  deletionProtectionReason?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  loadBalancerId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      deletionProtectionReason: 'DeletionProtectionReason',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      deletionProtectionReason: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

