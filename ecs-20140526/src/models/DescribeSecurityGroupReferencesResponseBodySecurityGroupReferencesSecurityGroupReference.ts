// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups } from "./DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups";


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

