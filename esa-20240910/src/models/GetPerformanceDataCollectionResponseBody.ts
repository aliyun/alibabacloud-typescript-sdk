// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPerformanceDataCollectionResponseBody extends $dara.Model {
  /**
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

