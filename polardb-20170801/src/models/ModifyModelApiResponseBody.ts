// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model API ID.
   * 
   * @example
   * mi-xxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelApiId: 'ModelApiId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelApiId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

