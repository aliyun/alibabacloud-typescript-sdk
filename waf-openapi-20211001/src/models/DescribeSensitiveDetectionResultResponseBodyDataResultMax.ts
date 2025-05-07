// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveDetectionResultResponseBodyDataResultMax extends $dara.Model {
  /**
   * @remarks
   * The number of sensitive personal information records that are of the most frequent sensitive data type.
   * 
   * @example
   * 187
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of sensitive personal information records that are of the most frequent sensitive data type and are involved in cross-border data transfer.
   * 
   * @example
   * 54
   */
  outboundCount?: number;
  /**
   * @remarks
   * The most frequent sensitive data type.
   * 
   * @example
   * 1003
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

