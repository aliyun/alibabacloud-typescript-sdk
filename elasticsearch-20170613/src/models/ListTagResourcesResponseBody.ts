// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyHeaders } from "./ListTagResourcesResponseBodyHeaders";
import { ListTagResourcesResponseBodyTagResources } from "./ListTagResourcesResponseBodyTagResources";


export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The labels of the resource.
   */
  headers?: ListTagResourcesResponseBodyHeaders;
  /**
   * @remarks
   * The number of resources to query.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of resources that have tags.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6D******
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource. Fixed to `ALIYUN::ELASTICSEARCH::INSTANCE`.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListTagResourcesResponseBodyHeaders,
      pageSize: 'number',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

