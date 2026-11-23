// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableExpressConnectRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry in the gateway route table.
   * 
   * This parameter is required.
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether the request is a dry run. Valid values:
   * 
   * - **true**: sends a check request and does not modify the EPS resource.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The next hop instance ID.
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

