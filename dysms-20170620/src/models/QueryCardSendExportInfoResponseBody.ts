// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCardSendExportInfoResponseBodyModel } from "./QueryCardSendExportInfoResponseBodyModel";


export class QueryCardSendExportInfoResponseBody extends $dara.Model {
  code?: string;
  model?: QueryCardSendExportInfoResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      model: QueryCardSendExportInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

