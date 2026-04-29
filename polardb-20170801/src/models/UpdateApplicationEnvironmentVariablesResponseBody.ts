// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationEnvironmentVariablesResponseBody extends $dara.Model {
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  restarted?: boolean;
  /**
   * @example
   * 1
   */
  totalVariables?: number;
  updatedKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      requestId: 'RequestId',
      restarted: 'Restarted',
      totalVariables: 'TotalVariables',
      updatedKeys: 'UpdatedKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
      restarted: 'boolean',
      totalVariables: 'number',
      updatedKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.updatedKeys)) {
      $dara.Model.validateArray(this.updatedKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

