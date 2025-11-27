// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Kabul
   */
  description?: string;
  /**
   * @remarks
   * The offset of the UTC time. The offset is in the following format: (UTC+*HH:mm*).
   * 
   * @example
   * (UTC+04:30)
   */
  standardTimeOffset?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Afghanistan Standard Time
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      standardTimeOffset: 'StandardTimeOffset',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      standardTimeOffset: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

