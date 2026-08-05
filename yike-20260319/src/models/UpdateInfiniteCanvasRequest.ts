// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * canvas_gesad*
   */
  canvasId?: string;
  /**
   * @example
   * https://*uncs.com/cover.png
   */
  coverUrl?: string;
  /**
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

