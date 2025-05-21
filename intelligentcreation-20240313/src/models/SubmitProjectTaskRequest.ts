// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitProjectTaskRequestFrames } from "./SubmitProjectTaskRequestFrames";


export class SubmitProjectTaskRequest extends $dara.Model {
  /**
   * @remarks
   * frame
   */
  frames?: SubmitProjectTaskRequestFrames[];
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  /**
   * @example
   * 1
   */
  subtitleTag?: number;
  transparentBackground?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'frames',
      scaleType: 'scaleType',
      subtitleTag: 'subtitleTag',
      transparentBackground: 'transparentBackground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFrames },
      scaleType: 'string',
      subtitleTag: 'number',
      transparentBackground: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

