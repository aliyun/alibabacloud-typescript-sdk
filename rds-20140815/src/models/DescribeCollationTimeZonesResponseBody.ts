// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone extends $dara.Model {
  description?: string;
  standardTimeOffset?: string;
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
  collationTimeZones?: DescribeCollationTimeZonesResponseBodyCollationTimeZones;
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

