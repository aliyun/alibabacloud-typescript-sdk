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
   * - addWhitelist: Adds the alert to the whitelist.
   * - offWhitelist: Removes the alert from the whitelist.
   * - offline_handled: Marks the alert as handled offline.
   * - mark_mis_info: Submits the alert as a false positive.
   * - ignore: Ignores the alert.
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
   * - agentless: Host detection.
   * - ecs_snapshot: User snapshot detection.
   * - ecs_image: Custom image detection.
   * 
   * @example
   * agentless
   */
  scanRange?: string;
  /**
   * @remarks
   * The scenario for batch processing. Valid values:
   * - same_file_md5: The same file MD5.
   * - default: The same alerting type. This is the default value.
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

