// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectReportRequest extends $dara.Model {
  /**
   * @example
   * 100******
   */
  eventId?: number;
  /**
   * @example
   * Basic,ThreatTypes,Intelligences,Sandbox
   */
  field?: string;
  /**
   * @example
   * 7ab4ee98d535623991bc178718******
   */
  fileHash?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * object_scan
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      field: 'Field',
      fileHash: 'FileHash',
      lang: 'Lang',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      field: 'string',
      fileHash: 'string',
      lang: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

