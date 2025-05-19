// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMonitoringTemplateResponseBodyResource } from "./GetMonitoringTemplateResponseBodyResource";


export class GetMonitoringTemplateResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  resource?: GetMonitoringTemplateResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      resource: GetMonitoringTemplateResponseBodyResource,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

