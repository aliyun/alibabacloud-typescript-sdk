// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCondition } from "./SearchCondition";


export class QueryYuqingMessageRequest extends $dara.Model {
  /**
   * @example
   * 5645a6c9-7d21-4926-a410-db9a1af85faa
   */
  requestId?: string;
  searchCondition?: SearchCondition;
  /**
   * @example
   * xxxx43434dsdsd
   */
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      searchCondition: 'searchCondition',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      searchCondition: SearchCondition,
      teamHashId: 'string',
    };
  }

  validate() {
    if(this.searchCondition && typeof (this.searchCondition as any).validate === 'function') {
      (this.searchCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

