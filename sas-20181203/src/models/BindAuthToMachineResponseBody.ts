// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of bound servers.
   * 
   * @example
   * 1
   */
  bindCount?: number;
  /**
   * @remarks
   * The shortage in the quota for cores of servers that can be protected.
   * 
   * @example
   * 1
   */
  insufficientCoreCount?: number;
  /**
   * @remarks
   * The shortage in the quota for servers that can be protected.
   * 
   * @example
   * 1
   */
  insufficientEcsCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 23AD0BD2-8771-5647-819E-6BA51E212F80
   */
  requestId?: string;
  /**
   * @remarks
   * The status code that indicates the result. Valid values:
   * 
   * *   **0**: The servers are bound to or unbound from Security Center.
   * *   **1**: The values that you specified for the parameters are invalid.
   * *   **2**: The quota for servers that can be protected is insufficient.
   * *   **3**: The quota for cores of servers that can be protected is insufficient.
   * 
   * @example
   * 2
   */
  resultCode?: number;
  /**
   * @remarks
   * The number of unbound servers.
   * 
   * @example
   * 1
   */
  unBindCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      insufficientCoreCount: 'InsufficientCoreCount',
      insufficientEcsCount: 'InsufficientEcsCount',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      unBindCount: 'UnBindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      insufficientCoreCount: 'number',
      insufficientEcsCount: 'number',
      requestId: 'string',
      resultCode: 'number',
      unBindCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

