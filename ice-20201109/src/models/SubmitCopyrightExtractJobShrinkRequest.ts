// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The video file for watermark extraction.
   * 
   * > - The region of the Object Storage Service (OSS) file or media asset must match the region of the current Intelligent Media Service (IMS) instance.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
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

