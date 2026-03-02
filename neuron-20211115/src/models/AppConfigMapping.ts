// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppConfigMapping extends $dara.Model {
  /**
   * @example
   * list
   */
  alias?: string;
  /**
   * @example
   * page_eo4r5y6a
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

