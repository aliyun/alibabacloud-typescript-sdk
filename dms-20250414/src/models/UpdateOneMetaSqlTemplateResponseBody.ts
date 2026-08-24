// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaSqlTemplateView } from "./OneMetaSqlTemplateView";


export class UpdateOneMetaSqlTemplateResponseBody extends $dara.Model {
  data?: OneMetaSqlTemplateView;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OneMetaSqlTemplateView,
      errorCode: 'string',
      errorMessage: 'string',
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

