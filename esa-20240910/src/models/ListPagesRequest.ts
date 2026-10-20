// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Specifies the Content-Type field in the HTTP header, such as:
   * * text/html
   * * application/json
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * Performs a fuzzy match on the name or description of the custom page.
   * 
   * @example
   * example
   */
  nameDescriptionLike?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      nameDescriptionLike: 'NameDescriptionLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      nameDescriptionLike: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: **1 to 100000**. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query parameters passed in JSON format, which include various filter conditions.
   */
  queryArgs?: ListPagesRequestQueryArgs;
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
      queryArgs: ListPagesRequestQueryArgs,
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

