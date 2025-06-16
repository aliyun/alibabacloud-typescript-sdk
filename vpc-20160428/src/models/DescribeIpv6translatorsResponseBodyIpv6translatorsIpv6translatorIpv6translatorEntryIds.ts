// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds extends $dara.Model {
  ipv6TranslatorEntryId?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6TranslatorEntryId)) {
      $dara.Model.validateArray(this.ipv6TranslatorEntryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

