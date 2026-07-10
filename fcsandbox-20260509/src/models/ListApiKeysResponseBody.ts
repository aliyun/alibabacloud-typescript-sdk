// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKey } from "./ApiKey";


export class ListApiKeysResponseBody extends $dara.Model {
  apiKeys?: ApiKey[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      code: 'code',
      message: 'message',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ApiKey },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

