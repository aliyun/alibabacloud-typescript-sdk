// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublishedAppInfoResponseBodyAppModels } from "./ListPublishedAppInfoResponseBodyAppModels";


export class ListPublishedAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * appModels
   */
  appModels?: ListPublishedAppInfoResponseBodyAppModels[];
  /**
   * @example
   * 2NVfhLfgy5b3J5iJyoLQ6x4EULMg1hbhgB9NfnvdK9oj5zwxd17j4TuQkZze3RvhEvBinZYjknujF3Q1M
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DB70F8FE-63A3-587B-8560-CEC258E8B944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appModels: 'AppModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appModels: { 'type': 'array', 'itemType': ListPublishedAppInfoResponseBodyAppModels },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appModels)) {
      $dara.Model.validateArray(this.appModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

