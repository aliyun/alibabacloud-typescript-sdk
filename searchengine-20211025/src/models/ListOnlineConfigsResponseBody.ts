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

export class ListOnlineConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
  result?: ListOnlineConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOnlineConfigsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

