// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitProjectTaskRequestFramesLayersMaterialMask } from "./SubmitProjectTaskRequestFramesLayersMaterialMask";


export class SubmitProjectTaskRequestFramesLayersMaterial extends $dara.Model {
  anchorStyleLevel?: string;
  /**
   * @example
   * video/mp4
   */
  format?: string;
  /**
   * @example
   * 38863
   */
  id?: string;
  mask?: SubmitProjectTaskRequestFramesLayersMaterialMask;
  speed?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  url?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      anchorStyleLevel: 'anchorStyleLevel',
      format: 'format',
      id: 'id',
      mask: 'mask',
      speed: 'speed',
      url: 'url',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorStyleLevel: 'string',
      format: 'string',
      id: 'string',
      mask: SubmitProjectTaskRequestFramesLayersMaterialMask,
      speed: 'string',
      url: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.mask && typeof (this.mask as any).validate === 'function') {
      (this.mask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

