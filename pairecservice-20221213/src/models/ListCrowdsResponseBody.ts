// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCrowdsResponseBodyCrowds } from "./ListCrowdsResponseBodyCrowds";


export class ListCrowdsResponseBody extends $dara.Model {
  crowds?: ListCrowdsResponseBodyCrowds[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crowds: 'Crowds',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowds: { 'type': 'array', 'itemType': ListCrowdsResponseBodyCrowds },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crowds)) {
      $dara.Model.validateArray(this.crowds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

