// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry } from "./DescribeIpv6translatorAclListAttributesResponseBodyAclEntriesAclEntry";


export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries extends $dara.Model {
  aclEntry?: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntry)) {
      $dara.Model.validateArray(this.aclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

