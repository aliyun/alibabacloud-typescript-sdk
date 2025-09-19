// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectReportRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID that corresponds to the file to be detected.
   * 
   * @example
   * 81****
   */
  eventId?: number;
  /**
   * @remarks
   * The field that you want to query. You can enter multiple fields and separate them with commas (,).
   * 
   * Valid values:
   * 
   * *   **ThreatTypes**: the type of the threat intelligence event
   * *   **Intelligences**: the threat intelligence event
   * *   **ThreatLevel**: the level of the threat intelligence event
   * *   **Basic**: the basic information about the report (the scan result)
   * *   **Sandbox**: the cloud sandbox check report
   * 
   * @example
   * Basic,,ThreatTypes,Intelligences,Sandbox
   */
  field?: string;
  /**
   * @remarks
   * The hash value of the file to be detected.
   * 
   * @example
   * b63917332950e5d219d0737ffe31****
   */
  fileHash?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * *   **machine**: host alerts
   * *   **object_scan**: file detection alerts
   * 
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

