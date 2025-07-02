// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFbIssueLabelsByLCResponseBodyData } from "./ListFbIssueLabelsByLcresponseBodyData";


export class ListFbIssueLabelsByLCResponseBody extends $dara.Model {
  code?: string;
  data?: ListFbIssueLabelsByLCResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFbIssueLabelsByLCResponseBodyData,
      message: 'string',
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

