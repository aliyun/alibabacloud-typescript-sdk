// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSliderCaptchaPagesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * The fuzzy search keyword for the name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  static names(): { [key: string]: string } {
    return {
      nameLike: 'NameLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameLike: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSliderCaptchaPagesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The filter parameters.
   */
  queryArgs?: ListSliderCaptchaPagesRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: ListSliderCaptchaPagesRequestQueryArgs,
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

