// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApplicationEnvironmentVariablesResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @example
   * 1
   */
  removedCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  restarted?: boolean;
  /**
   * @example
   * 0
   */
  totalVariables?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      removedCount: 'RemovedCount',
      requestId: 'RequestId',
      restarted: 'Restarted',
      totalVariables: 'TotalVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      removedCount: 'number',
      requestId: 'string',
      restarted: 'boolean',
      totalVariables: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

