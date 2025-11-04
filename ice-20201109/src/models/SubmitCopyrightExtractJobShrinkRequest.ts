// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobShrinkRequest extends $dara.Model {
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

