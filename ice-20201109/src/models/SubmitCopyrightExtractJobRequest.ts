// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The specific information for the input file, which can be an OSS URL or a media asset ID. OSS URL formats:
   * 
   * 1\\. oss://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * where bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the source file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
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
   * The source video file from which to extract the watermark.
   * 
   * > The OSS object or media asset must reside in the same region as the IMS service region.
   * 
   * This parameter is required.
   */
  input?: SubmitCopyrightExtractJobRequestInput;
  /**
   * @remarks
   * Additional parameters for the watermark job, provided as a JSON string. Supported parameter:
   * 
   * *   algoType: The algorithm type. Defaults to v1. The extraction algorithm must match the one used for embedding.
   * 
   *     *   v1: Copyright watermark extraction algorithm for long videos.
   *     *   v2: Copyright watermark extraction algorithm for short videos.
   * 
   * @example
   * {"algoType":"v2"}
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

