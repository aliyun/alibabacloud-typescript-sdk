// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReference } from "./DescribeSecurityGroupReferencesResponseBodySecurityGroupReferencesSecurityGroupReference";


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

