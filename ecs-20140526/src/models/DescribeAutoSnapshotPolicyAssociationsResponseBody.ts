// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociationsAutoSnapshotPolicyAssociation extends $dara.Model {
  autoSnapshotPolicyId?: string;
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      diskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociations extends $dara.Model {
  autoSnapshotPolicyAssociation?: DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociationsAutoSnapshotPolicyAssociation[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyAssociation: 'AutoSnapshotPolicyAssociation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyAssociation: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociationsAutoSnapshotPolicyAssociation },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicyAssociation)) {
      $dara.Model.validateArray(this.autoSnapshotPolicyAssociation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyAssociationsResponseBody extends $dara.Model {
  autoSnapshotPolicyAssociations?: DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociations;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyAssociations: 'AutoSnapshotPolicyAssociations',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyAssociations: DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociations,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.autoSnapshotPolicyAssociations && typeof (this.autoSnapshotPolicyAssociations as any).validate === 'function') {
      (this.autoSnapshotPolicyAssociations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

