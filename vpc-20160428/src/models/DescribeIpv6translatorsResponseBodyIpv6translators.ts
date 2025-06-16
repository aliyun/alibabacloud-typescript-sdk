// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator } from "./DescribeIpv6translatorsResponseBodyIpv6translatorsIpv6translator";


export class DescribeIPv6TranslatorsResponseBodyIpv6Translators extends $dara.Model {
  ipv6Translator?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator[];
  static names(): { [key: string]: string } {
    return {
      ipv6Translator: 'Ipv6Translator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Translator: { 'type': 'array', 'itemType': DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Translator)) {
      $dara.Model.validateArray(this.ipv6Translator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

