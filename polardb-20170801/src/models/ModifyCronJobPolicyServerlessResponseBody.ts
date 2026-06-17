// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCronJobPolicyServerlessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1401250-910B-57A6-8A6A-D9988A62B1CD
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

