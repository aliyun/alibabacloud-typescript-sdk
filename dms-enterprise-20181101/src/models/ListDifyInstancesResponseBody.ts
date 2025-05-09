// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDifyInstancesResponseBodyRoot } from "./ListDifyInstancesResponseBodyRoot";


export class ListDifyInstancesResponseBody extends $dara.Model {
  code?: string;
  errorCode?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  root?: ListDifyInstancesResponseBodyRoot;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      root: ListDifyInstancesResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

