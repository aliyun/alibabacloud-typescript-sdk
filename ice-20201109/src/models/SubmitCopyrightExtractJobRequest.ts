// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The information about the input file. Both OSS URLs and media asset IDs are supported.
   * The OSS URL must be in one of the following formats:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * where bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
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
   * - OSS: the URL of an OSS file.
   * - Media: the ID of a media asset.
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
   * The video file from which the watermark is to be extracted.
   * 
   * > - The region of the OSS file or media asset must be the same as the region of the current IMS instance.
   * 
   * This parameter is required.
   */
  input?: SubmitCopyrightExtractJobRequestInput;
  /**
   * @remarks
   * The watermark job parameters in JSON string format. The following parameters are supported:
   * 
   * - algoType: the algorithm type. Default value: v1. The extraction algorithm type must be the same as the algorithm type used for embedding.
   * 
   *   - v1: the copyright extraction API operation for long videos.
   *   - v2: the copyright extraction API operation for short videos.
   * 
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @remarks
   * The custom user data. The maximum length is 1,024 bytes.
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

