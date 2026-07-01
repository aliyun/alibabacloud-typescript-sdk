// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceExtractJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input source. Specify an OSS object URL or a media asset ID.
   * 
   * An OSS object URL can be in one of the following formats:
   * 
   * 1\\. oss\\://bucket/object
   * 
   * In these formats, `bucket` is the name of an OSS bucket in the same region as your IMS service, and `object` is the path of the OSS object.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - OSS: An OSS object URL.
   * 
   * - Media: A media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input video from which to extract the watermark.
   * 
   * > - The OSS object or media asset must be in the same region as your IMS service.
   * 
   * This parameter is required.
   */
  input?: SubmitTraceExtractJobRequestInput;
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
      input: 'Input',
      params: 'Params',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitTraceExtractJobRequestInput,
      params: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

