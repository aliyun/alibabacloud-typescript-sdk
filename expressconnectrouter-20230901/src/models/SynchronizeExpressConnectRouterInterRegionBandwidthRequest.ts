// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SynchronizeExpressConnectRouterInterRegionBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique for each request and can contain only ASCII characters.
   * 
   * Generate a unique value from your client for each request. The ClientToken parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request. The service resource is not modified.
   * 
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR) instance.
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

