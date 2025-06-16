// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl } from "./DescribeIpv6translatorAclListsResponseBodyIpv6translatorAclsIpv6translatorAcl";


export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls extends $dara.Model {
  IPv6TranslatorAcl?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl[];
  static names(): { [key: string]: string } {
    return {
      IPv6TranslatorAcl: 'IPv6TranslatorAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv6TranslatorAcl: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl },
    };
  }

  validate() {
    if(Array.isArray(this.IPv6TranslatorAcl)) {
      $dara.Model.validateArray(this.IPv6TranslatorAcl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

