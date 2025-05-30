// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsDataSourcesResponseBodyData } from "./ListMmsDataSourcesResponseBodyData";


export class ListMmsDataSourcesResponseBody extends $dara.Model {
  data?: ListMmsDataSourcesResponseBodyData;
  /**
   * @example
   * C1F7715F-D316-5AB6-BD02-5241083F4003
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsDataSourcesResponseBodyData,
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

