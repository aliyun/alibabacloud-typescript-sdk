// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextsRequest extends $dara.Model {
  /**
   * @example
   * mem_long_01,mem_long_02
   */
  contextIds?: string;
  /**
   * @example
   * {"userId":"u-10001"}
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      contextIds: 'contextIds',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextIds: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

