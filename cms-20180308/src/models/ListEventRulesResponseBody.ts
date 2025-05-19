// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventRulesResponseBodyDatapoints } from "./ListEventRulesResponseBodyDatapoints";


export class ListEventRulesResponseBody extends $dara.Model {
  code?: string;
  currentPage?: number;
  datapoints?: ListEventRulesResponseBodyDatapoints;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      datapoints: ListEventRulesResponseBodyDatapoints,
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

