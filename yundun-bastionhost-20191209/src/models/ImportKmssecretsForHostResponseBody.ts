// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKMSSecretsForHostResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * test1
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

export class ImportKMSSecretsForHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The import result for each secret.
   */
  results?: ImportKMSSecretsForHostResponseBodyResults[];
  /**
   * @remarks
   * The number of secrets that were successfully imported.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ImportKMSSecretsForHostResponseBodyResults },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

