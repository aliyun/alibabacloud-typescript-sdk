// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectMetaRequest extends $dara.Model {
  /**
   * @example
   * [{\\"name\\":\\"product\\",\\"value\\":\\"MongoDB\\"]
   */
  labels?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
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

