// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneEngineConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The engine configuration ID.
   * 
   * @example
   * 2
   */
  engineConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
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

