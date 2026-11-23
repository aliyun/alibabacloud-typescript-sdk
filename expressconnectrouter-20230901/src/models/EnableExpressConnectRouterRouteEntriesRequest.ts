// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableExpressConnectRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for this parameter. This ensures that the request is idempotent. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** is different for each API request.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * This parameter is required.
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request. The request does not modify service resources.
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of ECR.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the next hop instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      nexthopInstanceId: 'NexthopInstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      nexthopInstanceId: 'string',
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

