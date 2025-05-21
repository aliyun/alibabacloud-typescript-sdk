// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRequestContractBody extends $dara.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  description?: string;
  /**
   * @example
   * {"key":"value"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
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

