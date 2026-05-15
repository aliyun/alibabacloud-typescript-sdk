// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConsumerAPIKey } from "./ConsumerApikey";


export class ListConsumerAPIKeysOutput extends $dara.Model {
  /**
   * @remarks
   * 消费者API密钥列表
   */
  items?: ConsumerAPIKey[];
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的消费者API密钥总数
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ConsumerAPIKey },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

