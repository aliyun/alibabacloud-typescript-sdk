// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of personal information records.
   * 
   * @example
   * 672
   */
  infoCount?: number;
  /**
   * @remarks
   * The total number of personal information records involved in cross-border data transfer.
   * 
   * @example
   * 541
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The total number of sensitive information records involved in cross-border data transfer.
   * 
   * @example
   * 378
   */
  sensitiveOutboundCount?: number;
  /**
   * @remarks
   * The time of cross-border data transfer. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'InfoCount',
      infoOutboundCount: 'InfoOutboundCount',
      sensitiveOutboundCount: 'SensitiveOutboundCount',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      infoOutboundCount: 'number',
      sensitiveOutboundCount: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

