// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration extends $dara.Model {
  encrypted?: boolean;
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      KMSKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags extends $dara.Model {
  tag?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy extends $dara.Model {
  autoSnapshotPolicyId?: string;
  autoSnapshotPolicyName?: string;
  copiedSnapshotsRetentionDays?: number;
  copyEncryptionConfiguration?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration;
  creationTime?: string;
  diskNums?: number;
  enableCrossRegionCopy?: boolean;
  regionId?: string;
  repeatWeekdays?: string;
  resourceGroupId?: string;
  retentionDays?: number;
  status?: string;
  tags?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags;
  targetCopyRegions?: string;
  timePoints?: string;
  type?: string;
  volumeNums?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      copyEncryptionConfiguration: 'CopyEncryptionConfiguration',
      creationTime: 'CreationTime',
      diskNums: 'DiskNums',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      resourceGroupId: 'ResourceGroupId',
      retentionDays: 'RetentionDays',
      status: 'Status',
      tags: 'Tags',
      targetCopyRegions: 'TargetCopyRegions',
      timePoints: 'TimePoints',
      type: 'Type',
      volumeNums: 'VolumeNums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      copiedSnapshotsRetentionDays: 'number',
      copyEncryptionConfiguration: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration,
      creationTime: 'string',
      diskNums: 'number',
      enableCrossRegionCopy: 'boolean',
      regionId: 'string',
      repeatWeekdays: 'string',
      resourceGroupId: 'string',
      retentionDays: 'number',
      status: 'string',
      tags: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags,
      targetCopyRegions: 'string',
      timePoints: 'string',
      type: 'string',
      volumeNums: 'number',
    };
  }

  validate() {
    if(this.copyEncryptionConfiguration && typeof (this.copyEncryptionConfiguration as any).validate === 'function') {
      (this.copyEncryptionConfiguration as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies extends $dara.Model {
  autoSnapshotPolicy?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicy)) {
      $dara.Model.validateArray(this.autoSnapshotPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBody extends $dara.Model {
  autoSnapshotPolicies?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot policies
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotPolicies && typeof (this.autoSnapshotPolicies as any).validate === 'function') {
      (this.autoSnapshotPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

