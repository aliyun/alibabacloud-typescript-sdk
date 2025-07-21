// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-09-15T07:02:14Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 38bbed2a-15e0-45ad-98d4-816ad2ccf4ea
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plannedDeleteTime: 'string',
      requestId: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

