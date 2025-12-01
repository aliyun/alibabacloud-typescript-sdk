// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociationsAutoSnapshotPolicyAssociation extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-bp12quk7gqhhuu1f****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
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
  /**
   * @remarks
   * The association of automatic snapshot policies.
   */
  autoSnapshotPolicyAssociations?: DescribeAutoSnapshotPolicyAssociationsResponseBodyAutoSnapshotPolicyAssociations;
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

