// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMetaCollectionsResponseBodyData } from "./ListMetaCollectionsResponseBodyData";


export class ListMetaCollectionsResponseBody extends $dara.Model {
  data?: ListMetaCollectionsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E25887B7-579C-54A5-9C4F-83A0DE367DDE
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
      data: ListMetaCollectionsResponseBodyData,
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

