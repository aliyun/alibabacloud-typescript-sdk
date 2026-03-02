// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewComponentCrdSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

