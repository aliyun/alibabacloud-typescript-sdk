// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentsResponseBodyList } from "./ListAgentsResponseBodyList";


export class ListAgentsResponseBody extends $dara.Model {
  list?: ListAgentsResponseBodyList[];
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

