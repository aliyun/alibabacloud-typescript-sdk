// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceExtractJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input video from which to extract the watermark.
   * 
   * > - The OSS object or media asset must be in the same region as your IMS service.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * Extraction job parameters, specified as a JSON string. The following parameters are supported:
   * 
   * - `m3u8Type`: The algorithm type. The default value is `v1`.
   * 
   *   - `v1`: Extracts an m3u8 playlist with absolute paths.
   * 
   *   - `v2`: Extracts an m3u8 playlist with relative paths.
   * 
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @remarks
   * The user-defined data. Maximum length: 1,024 bytes.
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

