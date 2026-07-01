// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * Specifies the URL of an Object Storage Service (OSS) object or the ID of a media asset.
   * OSS URLs can be in the following formats:
   * 
   * 1\\. oss\\://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In these formats, `bucket` is the name of a bucket in the same region as your IMS instance, and `object` is the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1. OSS: The URL of a file in Object Storage Service (OSS).
   * 
   * 2. Media: The ID of a media asset.
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

export class SubmitCopyrightExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The video file for watermark extraction.
   * 
   * > - The region of the Object Storage Service (OSS) file or media asset must match the region of the current Intelligent Media Service (IMS) instance.
   * 
   * This parameter is required.
   */
  input?: SubmitCopyrightExtractJobRequestInput;
  /**
   * @remarks
   * The watermark job parameters, specified as a JSON string.
   * 
   * - algoType: The algorithm type. Default value: v1. The extraction algorithm type must match the algorithm type used for embedding the watermark.
   * 
   *   - v1: The copyright extraction algorithm for long-form videos.
   * 
   *   - v2: The copyright extraction algorithm for short-form videos.
   * 
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @remarks
   * The user-defined data. The maximum length is 1,024 bytes.
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
      input: SubmitCopyrightExtractJobRequestInput,
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

