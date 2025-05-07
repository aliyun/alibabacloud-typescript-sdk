// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveDetectionResultResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The number of personal information records.
   * 
   * @example
   * 11
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of sensitive personal information records that are involved in cross-border data transfer.
   * 
   * @example
   * 6
   */
  outboundCount?: number;
  /**
   * @remarks
   * The sensitive data type.
   * 
   * @example
   * 1002
   */
  sensitiveCode?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'InfoCount',
      outboundCount: 'OutboundCount',
      sensitiveCode: 'SensitiveCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      outboundCount: 'number',
      sensitiveCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

