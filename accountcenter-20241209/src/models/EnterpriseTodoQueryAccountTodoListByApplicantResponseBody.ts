// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyData } from "./EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyData";


export class EnterpriseTodoQueryAccountTodoListByApplicantResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyData;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

