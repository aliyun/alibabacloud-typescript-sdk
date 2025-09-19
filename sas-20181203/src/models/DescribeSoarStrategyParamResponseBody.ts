// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameters of the policy.
   * 
   * @example
   * {"summary":[{"name":"email","type":"String","isRequired":false,"fromProperty":"notifyConfig.email"}]}
   */
  params?: string;
  /**
   * @remarks
   * The process information of the policy.
   * 
   * @example
   * {"edges":[{"level":0,"removeFlag":0,"source":1,"target":8}]}
   */
  processInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      processInfo: 'ProcessInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      processInfo: 'string',
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

