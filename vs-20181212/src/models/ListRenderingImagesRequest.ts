// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * @example
   * m-9timxhrrgopkec8ju
   */
  imageId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

