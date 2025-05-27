// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBindDataSourcesResponseBodyData } from "./ListBindDataSourcesResponseBodyData";


export class ListBindDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBindDataSourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListBindDataSourcesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

