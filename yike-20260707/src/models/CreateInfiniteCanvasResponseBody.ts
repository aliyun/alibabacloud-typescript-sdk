// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInfiniteCanvasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The canvas ID.
   * 
   * @example
   * canvas_***
   */
  canvasId?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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

