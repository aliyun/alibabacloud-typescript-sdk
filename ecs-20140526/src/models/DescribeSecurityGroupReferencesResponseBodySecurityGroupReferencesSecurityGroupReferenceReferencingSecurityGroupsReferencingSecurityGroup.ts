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

