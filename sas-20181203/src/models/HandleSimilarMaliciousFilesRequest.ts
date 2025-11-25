// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * Target alert ID
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @remarks
   * Language type for request and response messages. Values include:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Handling action:
   * - addWhitelist: Add to whitelist;
   * - offWhitelist: Remove from whitelist;
   * - offline_handled: Handled offline;
   * - mark_mis_info: Report as false positive;
   * - ignore: Ignore.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  operation?: string;
  /**
   * @remarks
   * File source. Values include:
   * - agentless: Host detection;
   * - ecs_snapshot: User snapshot detection;
   * - ecs_image: User-defined image detection.
   * 
   * @example
   * agentless
   */
  scanRange?: string;
  /**
   * @remarks
   * Batch processing scenario:
   * - same_file_md5: Same file MD5;
   * - default (default value): Same alert type.
   * 
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

