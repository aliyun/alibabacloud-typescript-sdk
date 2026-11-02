// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The video file from which the watermark is to be extracted.
   * 
   * > - The region of the OSS file or media asset must be the same as the region of the current IMS instance.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
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

