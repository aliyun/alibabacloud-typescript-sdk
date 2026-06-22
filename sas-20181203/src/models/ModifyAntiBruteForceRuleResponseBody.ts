// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAntiBruteForceRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760E840
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

