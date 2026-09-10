// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. If you call this operation multiple times for the same HTTP API by using the same clientToken value and the same delete request parameters, the result of the first successful call is returned.
   * 
   * @example
   * delete-http-api-client-token-001
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. If set to true, all synchronous validations identical to an actual deletion are executed (including admission checks such as whether a published API can be deleted), but the API is not deleted, no associated configurations are cleaned up, and no side effects are produced. If this parameter is not specified or is set to false, the behavior is the same as the existing version.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

