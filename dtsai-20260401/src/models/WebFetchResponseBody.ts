// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebFetchResponseBody extends $dara.Model {
  content?: string;
  contentFormat?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  title?: string;
  url?: string;
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentFormat: 'ContentFormat',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      title: 'Title',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentFormat: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      title: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

