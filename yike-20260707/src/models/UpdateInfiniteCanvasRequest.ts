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
   * 84ec412603784c04a00c737c71d86dfd
   */
  coverUrl?: string;
  /**
   * @remarks
   * The project title.
   * 
   * @example
   * title
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

