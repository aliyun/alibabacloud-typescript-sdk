// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaSqlTemplateView } from "./OneMetaSqlTemplateView";


export class ListOneMetaSqlTemplatesResponseBody extends $dara.Model {
  data?: OneMetaSqlTemplateView[];
  errorCode?: string;
  errorMessage?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OneMetaSqlTemplateView },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

