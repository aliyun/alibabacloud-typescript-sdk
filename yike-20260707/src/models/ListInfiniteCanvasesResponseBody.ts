// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfiniteCanvasesResponseBodyCanvasList extends $dara.Model {
  /**
   * @remarks
   * The ID of the infinite canvas.
   * 
   * @example
   * canvas_xxx
   */
  canvasId?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * http://example.com/cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The creation time, in milliseconds.
   * 
   * @example
   * 2025-12-26T10:21:17Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-03-18T10:03:56Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The thumbnail height, in px.
   * 
   * @example
   * http://example.com/thumbnail2.png
   */
  thumbnail?: string;
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

export class ListInfiniteCanvasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of infinite canvases.
   */
  canvasList?: ListInfiniteCanvasesResponseBodyCanvasList[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 16
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of infinite canvases.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canvasList: 'CanvasList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canvasList: { 'type': 'array', 'itemType': ListInfiniteCanvasesResponseBodyCanvasList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.canvasList)) {
      $dara.Model.validateArray(this.canvasList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

