// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContactFieldResponseBody extends $dara.Model {
  /**
   * @example
   * ABAC3BAC-FCFA-4DAE-B47C-FA4105CB07C6
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

