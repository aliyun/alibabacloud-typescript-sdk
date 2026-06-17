// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationEnvironmentVariablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the gateway was restarted.
   * 
   * @example
   * true
   */
  restarted?: boolean;
  /**
   * @remarks
   * The total number of environment variables for the application after the update.
   * 
   * @example
   * 1
   */
  totalVariables?: number;
  /**
   * @remarks
   * A list of the environment variable names that were added or updated.
   */
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

