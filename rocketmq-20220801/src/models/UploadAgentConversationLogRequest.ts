// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentConversationLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * H4sIAAAAAAAAEzMyMDLTNbDUNTQKMTSwMgAhbQMLKwMDBU8/N3+F4sq8kozUksxkheSczNS8EoWc/HSF4pLEohIuIwydhgR1pualcAEAN/JXaXIAAAA=
   */
  contentGzipB64?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client.log
   */
  fileName?: string;
  /**
   * @example
   * 2026-09-12T11:00:00+08:00
   */
  timeRangeEnd?: string;
  /**
   * @example
   * 2026-09-12T10:00:00+08:00
   */
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      contentGzipB64: 'contentGzipB64',
      fileName: 'fileName',
      timeRangeEnd: 'timeRangeEnd',
      timeRangeStart: 'timeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentGzipB64: 'string',
      fileName: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

