// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the security group whose rules reference the specified security group belongs.
   * 
   * @example
   * 123456****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the security group whose rules reference the specified security group.
   * 
   * @example
   * sg-bp67acfmxazb4j****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups extends $dara.Model {
  referencingSecurityGroup?: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      referencingSecurityGroup: 'ReferencingSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencingSecurityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.referencingSecurityGroup)) {
      $dara.Model.validateArray(this.referencingSecurityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReference extends $dara.Model {
  /**
   * @remarks
   * Details about the security groups whose rules reference the specified security group.
   */
  referencingSecurityGroups?: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups;
  /**
   * @remarks
   * The ID of the specified security group.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      referencingSecurityGroups: 'ReferencingSecurityGroups',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencingSecurityGroups: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups,
      securityGroupId: 'string',
    };
  }

  validate() {
    if(this.referencingSecurityGroups && typeof (this.referencingSecurityGroups as any).validate === 'function') {
      (this.referencingSecurityGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences extends $dara.Model {
  securityGroupReference?: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReference[];
  static names(): { [key: string]: string } {
    return {
      securityGroupReference: 'SecurityGroupReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupReference: { 'type': 'array', 'itemType': DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReference },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupReference)) {
      $dara.Model.validateArray(this.securityGroupReference);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the references to the specified security groups.
   */
  securityGroupReferences?: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupReferences: 'SecurityGroupReferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupReferences: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences,
    };
  }

  validate() {
    if(this.securityGroupReferences && typeof (this.securityGroupReferences as any).validate === 'function') {
      (this.securityGroupReferences as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

