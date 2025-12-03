// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCoordinationCodeResponseBody extends $dara.Model {
  /**
   * @example
   * PA3MU***
   */
  coordinationCode?: string;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationCode: 'CoordinationCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationCode: 'string',
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

