// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCardSmsStatisticsSendListResponseBodyModel } from "./QueryCardSmsStatisticsSendListResponseBodyModel";


export class QueryCardSmsStatisticsSendListResponseBody extends $dara.Model {
  code?: string;
  model?: QueryCardSmsStatisticsSendListResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryCardSmsStatisticsSendListResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

