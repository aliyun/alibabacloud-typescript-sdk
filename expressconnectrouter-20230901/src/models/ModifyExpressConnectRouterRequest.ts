// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique value for this parameter from your client. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. The **RequestId** of each request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of ECR.
   * 
   * > The description can be empty or 0 to 256 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request without modifying the service resource.
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of ECR.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The name of ECR.
   * 
   * > The name can be empty or 0 to 128 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * test
   */
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      name: 'string',
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

