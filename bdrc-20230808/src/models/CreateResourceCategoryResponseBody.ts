// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Resource category ID.
   * 
   * @example
   * rc-123****7890
   */
  resourceCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCategoryId: 'ResourceCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateResourceCategoryResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * AF95C627-D725-5656-B128-B9BCCAF89025
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateResourceCategoryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

