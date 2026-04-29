// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnknownThreatDetectStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

