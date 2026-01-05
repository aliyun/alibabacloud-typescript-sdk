// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerAuthorizationRulesRequest extends $dara.Model {
  /**
   * @example
   * qwen3
   */
  apiNameLike?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameLike: 'apiNameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

