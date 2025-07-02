// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLabelsResponseBodyData } from "./ListLabelsResponseBodyData";


export class ListLabelsResponseBody extends $dara.Model {
  code?: string;
  data?: ListLabelsResponseBodyData[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListLabelsResponseBodyData },
      message: 'string',
      nextToken: 'string',
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

