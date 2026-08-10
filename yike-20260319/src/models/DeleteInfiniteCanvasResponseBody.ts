// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInfiniteCanvasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the infinite canvas.
   * 
   * @example
   * canvas_adaasd*
   */
  canvasId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ***F88A3-AC51-5588-859A-03144F082***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canvasId: 'CanvasId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvasId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

