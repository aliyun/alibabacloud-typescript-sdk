// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotent request token. For the same tenant, model API, and parameters, you can use the original client token to retry the deletion if a background deletion fails. A conflict is returned if an active operation is in progress or if the configuration has been replaced by a newer operation. A replay of a fully completed deletion returns an empty success response, but using the same token for a different target is still rejected.
   * 
   * @example
   * delete-model-api-client-token-001
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. If you set this parameter to true, the system performs the same synchronous admission checks as a real deletion, but does not create a deletion run or idempotent record, stop the service, or delete the API or associated configurations. If you set this parameter to false or leave it empty, the actual deletion is accepted.
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

