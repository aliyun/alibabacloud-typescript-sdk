// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportGatewayApisResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  apiCount?: number;
  downloadUrl?: string;
  errorField?: string;
  groupCount?: number;
  httpStatusCode?: number;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      apiCount: 'ApiCount',
      downloadUrl: 'DownloadUrl',
      errorField: 'ErrorField',
      groupCount: 'GroupCount',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      apiCount: 'number',
      downloadUrl: 'string',
      errorField: 'string',
      groupCount: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

