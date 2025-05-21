// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitProjectTaskRequestFramesLayersMaterial } from "./SubmitProjectTaskRequestFramesLayersMaterial";


export class SubmitProjectTaskRequestFramesLayers extends $dara.Model {
  /**
   * @example
   * 222
   */
  height?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  material?: SubmitProjectTaskRequestFramesLayersMaterial;
  /**
   * @example
   * 11
   */
  positionX?: number;
  /**
   * @example
   * 22
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 111
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      index: 'index',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      index: 'number',
      material: SubmitProjectTaskRequestFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

