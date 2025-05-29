// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstancesRequest extends $dara.Model {
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
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

