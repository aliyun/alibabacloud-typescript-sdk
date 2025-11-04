// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceExtractJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The source video file from which to extract the watermark.
   * 
   * > The OSS object or media asset must reside in the same region as the IMS service region.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * Additional parameters for the watermark job, provided as a JSON string. Supported parameter:
   * 
   * *   m3u8Type: The extraction algorithm type. Defaults to v1.
   * 
   *     *   v1: Extracts from an M3U8 with absolute paths.
   *     *   v2: Extracts from an M3U8 with relative paths.
   * 
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @remarks
   * The custom data, which can be up to 1,024 bytes in size.
   * 
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      params: 'Params',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      params: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

