// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCollationTimeZonesResponseBodyCollationTimeZones } from "./DescribeCollationTimeZonesResponseBodyCollationTimeZones";


export class DescribeCollationTimeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the character set collations and time zones that are available.
   */
  collationTimeZones?: DescribeCollationTimeZonesResponseBodyCollationTimeZones;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EAED246-DB18-4C8D-9EB5-C319626F2A77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      collationTimeZones: 'CollationTimeZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collationTimeZones: DescribeCollationTimeZonesResponseBodyCollationTimeZones,
      requestId: 'string',
    };
  }

  validate() {
    if(this.collationTimeZones && typeof (this.collationTimeZones as any).validate === 'function') {
      (this.collationTimeZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

