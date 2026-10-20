// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSliderCaptchaPagesResponseBodyPages extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom slider CAPTCHA page.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom slider CAPTCHA page.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The list of associated site IDs.
   */
  siteIds?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      siteIds: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      siteIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.siteIds)) {
      $dara.Model.validateArray(this.siteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSliderCaptchaPagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom slider CAPTCHA pages.
   */
  pages?: ListSliderCaptchaPagesResponseBodyPages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pages: 'Pages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pages: { 'type': 'array', 'itemType': ListSliderCaptchaPagesResponseBodyPages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pages)) {
      $dara.Model.validateArray(this.pages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

