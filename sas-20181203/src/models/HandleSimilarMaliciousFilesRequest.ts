// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The handling action. Valid values:
   * - addWhitelist: adds to the whitelist.
   * - offWhitelist: removes from the whitelist.
   * - offline_handled: handled offline.
   * - mark_mis_info: submits as a false positive.
   * - ignore: ignores the alert.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  operation?: string;
  /**
   * @remarks
   * The file source. Valid values:
   * - agentless: host detection.
   * - ecs_snapshot: user snapshot detection.
   * - ecs_image: user custom image detection.
   * 
   * @example
   * agentless
   */
  scanRange?: string;
  /**
   * @remarks
   * The batch processing scenario. Valid values:
   * - same_file_md5: same file MD5.
   * - default (default value): same alerting type.
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

