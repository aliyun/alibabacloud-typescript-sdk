// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCardSmsStatisticsListResponseBodyModel } from "./QueryCardSmsStatisticsListResponseBodyModel";


export class QueryCardSmsStatisticsListResponseBody extends $dara.Model {
  code?: string;
  model?: QueryCardSmsStatisticsListResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryCardSmsStatisticsListResponseBodyModel },
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

