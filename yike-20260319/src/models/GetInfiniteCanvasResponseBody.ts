// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInfiniteCanvasResponseBodyInfiniteCanvas extends $dara.Model {
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
   * The cover URL.
   * 
   * @example
   * https://*uncs.com/cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2026-07-01T08:42:16Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-07-01T08:42:16Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * https://*uncs.com/cover.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * The title of the infinite canvas.
   * 
   * @example
   * test infinite canvas
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canvasId: 'CanvasId',
      coverUrl: 'CoverUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      thumbnail: 'Thumbnail',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvasId: 'string',
      coverUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      thumbnail: 'string',
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

export class GetInfiniteCanvasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the infinite canvas.
   */
  infiniteCanvas?: GetInfiniteCanvasResponseBodyInfiniteCanvas;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infiniteCanvas: 'InfiniteCanvas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infiniteCanvas: GetInfiniteCanvasResponseBodyInfiniteCanvas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.infiniteCanvas && typeof (this.infiniteCanvas as any).validate === 'function') {
      (this.infiniteCanvas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

