// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventFlowsRequest extends $dara.Model {
  currentPage?: number;
  dealed?: string;
  lang?: string;
  pageSize?: number;
  requestId?: string;
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      lang: 'Lang',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      lang: 'string',
      pageSize: 'number',
      requestId: 'string',
      securityEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

