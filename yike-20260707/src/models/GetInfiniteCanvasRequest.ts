// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the infinite canvas.
   * 
   * This parameter is required.
   * 
   * @example
   * canvas_***
   */
  canvasId?: string;
  static names(): { [key: string]: string } {
    return {
      canvasId: 'CanvasId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvasId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

