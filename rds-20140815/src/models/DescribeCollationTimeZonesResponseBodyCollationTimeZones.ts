// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone } from "./DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone";


export class DescribeCollationTimeZonesResponseBodyCollationTimeZones extends $dara.Model {
  collationTimeZone?: DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone[];
  static names(): { [key: string]: string } {
    return {
      collationTimeZone: 'CollationTimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collationTimeZone: { 'type': 'array', 'itemType': DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone },
    };
  }

  validate() {
    if(Array.isArray(this.collationTimeZone)) {
      $dara.Model.validateArray(this.collationTimeZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

