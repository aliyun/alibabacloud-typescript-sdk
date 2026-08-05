// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInfiniteCanvasResponseBodyInfiniteCanvas extends $dara.Model {
  /**
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
   * 2026-07-01T08:42:16Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-07-01T08:42:16Z
   */
  gmtModified?: string;
  /**
   * @example
   * https://*uncs.com/cover.png
   */
  thumbnail?: string;
  /**
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
  infiniteCanvas?: GetInfiniteCanvasResponseBodyInfiniteCanvas;
  /**
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

