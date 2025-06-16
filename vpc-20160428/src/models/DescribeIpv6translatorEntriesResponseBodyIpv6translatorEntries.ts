// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry } from "./DescribeIpv6translatorEntriesResponseBodyIpv6translatorEntriesIpv6translatorEntry";


export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries extends $dara.Model {
  ipv6TranslatorEntry?: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntry: 'Ipv6TranslatorEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6TranslatorEntry)) {
      $dara.Model.validateArray(this.ipv6TranslatorEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

