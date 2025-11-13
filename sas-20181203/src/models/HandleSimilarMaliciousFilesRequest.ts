// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  operation?: string;
  /**
   * @example
   * agentless
   */
  scanRange?: string;
  /**
   * @example
   * same_file_md5
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      lang: 'Lang',
      operation: 'Operation',
      scanRange: 'ScanRange',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      lang: 'string',
      operation: 'string',
      scanRange: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

