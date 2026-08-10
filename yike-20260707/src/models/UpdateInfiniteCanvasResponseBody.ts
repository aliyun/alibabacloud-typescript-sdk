// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInfiniteCanvasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the infinite canvas.
   * 
   * @example
   * canvas_gesad*
   */
  canvasId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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

