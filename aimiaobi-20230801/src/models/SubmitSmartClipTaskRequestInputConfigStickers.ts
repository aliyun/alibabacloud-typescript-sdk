// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSmartClipTaskRequestInputConfigStickersStickerId } from "./SubmitSmartClipTaskRequestInputConfigStickersStickerId";


export class SubmitSmartClipTaskRequestInputConfigStickers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  stickerId?: SubmitSmartClipTaskRequestInputConfigStickersStickerId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      stickerId: 'StickerId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      stickerId: SubmitSmartClipTaskRequestInputConfigStickersStickerId,
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.stickerId && typeof (this.stickerId as any).validate === 'function') {
      (this.stickerId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

