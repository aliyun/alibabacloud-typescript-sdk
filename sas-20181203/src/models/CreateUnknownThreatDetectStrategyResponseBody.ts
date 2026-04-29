// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUnknownThreatDetectStrategyResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

