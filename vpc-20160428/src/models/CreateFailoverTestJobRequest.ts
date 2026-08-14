// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFailoverTestJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the failover test job.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating the failover test node. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check passes, the DryRunOperation error code is returned.
   * - **false** (default): sends a Normal request. If the check passes, a 2xx HTTP status code is returned and the failover test node is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The duration of the failover test job. Unit: minutes. Valid values: **1 to 4320**.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  jobDuration?: number;
  /**
   * @remarks
   * The type of the failover test job. Valid values:
   * 
   * - **StartNow**: starts immediately. The failover test job starts immediately after it is created.
   * 
   * - **StartLater**: does not start. Only the failover test job is created without starting the test.
   * 
   * This parameter is required.
   * 
   * @example
   * StartNow
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the failover test job.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the failover test job.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs to test. You can add up to 16 resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the resource to test. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      jobDuration: 'JobDuration',
      jobType: 'JobType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      jobDuration: 'number',
      jobType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

