// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup } from "./DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup";


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

