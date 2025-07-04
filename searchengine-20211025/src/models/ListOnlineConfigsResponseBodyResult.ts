// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineConfigsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information
   * 
   * @example
   * {\\"specItems\\":[{\\"specKey\\":\\"YQ_KEYWORD_NUMBER_PLUS\\",\\"value\\":\\"1\\"}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the index
   * 
   * @example
   * generation
   */
  indexName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      indexName: 'indexName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      indexName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

