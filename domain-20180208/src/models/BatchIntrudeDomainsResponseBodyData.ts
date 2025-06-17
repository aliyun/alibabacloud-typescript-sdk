// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchIntrudeDomainsResponseBodyDataFailureList } from "./BatchIntrudeDomainsResponseBodyDataFailureList";
import { BatchIntrudeDomainsResponseBodyDataSuccessList } from "./BatchIntrudeDomainsResponseBodyDataSuccessList";


export class BatchIntrudeDomainsResponseBodyData extends $dara.Model {
  failureCount?: number;
  failureList?: BatchIntrudeDomainsResponseBodyDataFailureList[];
  successCount?: number;
  successList?: BatchIntrudeDomainsResponseBodyDataSuccessList[];
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      failureList: 'FailureList',
      successCount: 'SuccessCount',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      failureList: { 'type': 'array', 'itemType': BatchIntrudeDomainsResponseBodyDataFailureList },
      successCount: 'number',
      successList: { 'type': 'array', 'itemType': BatchIntrudeDomainsResponseBodyDataSuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.failureList)) {
      $dara.Model.validateArray(this.failureList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

