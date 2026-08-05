// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfiniteCanvasesResponseBodyCanvasList extends $dara.Model {
  /**
   * @example
   * canvas_xxx
   */
  canvasId?: string;
  /**
   * @example
   * http://example.com/cover.png
   */
  coverUrl?: string;
  /**
   * @example
   * 2025-12-26T10:21:17Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-03-18T10:03:56Z
   */
  gmtModified?: string;
  /**
   * @example
   * http://example.com/thumbnail2.png
   */
  thumbnail?: string;
  /**
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
  canvasList?: ListInfiniteCanvasesResponseBodyCanvasList[];
  /**
   * @example
   * 16
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
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

