// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the infinite canvas.
   * 
   * This parameter is required.
   * 
   * @example
   * canvas_gesad*
   */
  canvasId?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://*uncs.com/cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The title of the infinite canvas.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canvasId: 'CanvasId',
      coverUrl: 'CoverUrl',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvasId: 'string',
      coverUrl: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

