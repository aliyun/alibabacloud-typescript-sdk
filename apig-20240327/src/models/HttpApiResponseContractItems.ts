// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiResponseContractItems extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 正常接口响应
   */
  description?: string;
  /**
   * @example
   * {"result": "ok"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

