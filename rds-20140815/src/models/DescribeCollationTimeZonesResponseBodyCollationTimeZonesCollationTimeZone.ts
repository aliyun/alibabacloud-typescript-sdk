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

