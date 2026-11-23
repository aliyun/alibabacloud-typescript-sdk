// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForceDeleteExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure that the request is idempotent.
   * 
   * Generate a unique parameter value from your client. The ClientToken parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the request as the **ClientToken**. Each API request has a unique **RequestId**.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check the request. No resources are modified.
   * 
   * - **false** (default): Sends a standard request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the ECR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

