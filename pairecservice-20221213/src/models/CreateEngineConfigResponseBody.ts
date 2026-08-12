// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The engine configuration ID.
   * 
   * @example
   * 1
   */
  engineConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineConfigId: 'EngineConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigId: 'string',
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

