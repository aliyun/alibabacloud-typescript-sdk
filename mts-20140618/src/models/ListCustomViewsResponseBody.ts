// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewsResponseBodyCustomViewsCustomView extends $dara.Model {
  /**
   * @example
   * 1
   */
  customViewId?: string;
  /**
   * @example
   * http://``127.66.**.**``/photo.jpeg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customViewId: 'CustomViewId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsResponseBodyCustomViews extends $dara.Model {
  customView?: ListCustomViewsResponseBodyCustomViewsCustomView[];
  static names(): { [key: string]: string } {
    return {
      customView: 'CustomView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customView: { 'type': 'array', 'itemType': ListCustomViewsResponseBodyCustomViewsCustomView },
    };
  }

  validate() {
    if(Array.isArray(this.customView)) {
      $dara.Model.validateArray(this.customView);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewsResponseBody extends $dara.Model {
  customViews?: ListCustomViewsResponseBodyCustomViews;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customViews: 'CustomViews',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViews: ListCustomViewsResponseBodyCustomViews,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customViews && typeof (this.customViews as any).validate === 'function') {
      (this.customViews as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

