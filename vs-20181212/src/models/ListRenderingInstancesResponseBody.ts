// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstancesResponseBodyRenderingInstances extends $dara.Model {
  /**
   * @example
   * 2023-11-17T02:18:04Z
   */
  creationTime?: string;
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
      creationTime: 'CreationTime',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
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

export class ListRenderingInstancesResponseBody extends $dara.Model {
  renderingInstances?: ListRenderingInstancesResponseBodyRenderingInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      renderingInstances: 'RenderingInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstances: { 'type': 'array', 'itemType': ListRenderingInstancesResponseBodyRenderingInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstances)) {
      $dara.Model.validateArray(this.renderingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

