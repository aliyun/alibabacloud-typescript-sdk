// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingInstancesResponseBodyRenderingInstances } from "./ListRenderingInstancesResponseBodyRenderingInstances";


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

