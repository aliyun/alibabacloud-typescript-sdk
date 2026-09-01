// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFailoverTestJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
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
   * - **true**: sends the request without creating the failover test node. The system checks the AccessKey validity, Resource Access Management (RAM) user authorization, and required parameters. If the check fails, the corresponding error is returned. If the check passes, the DryRunOperation error code is returned.
   * - **false** (default): sends a Normal request. After the check passes, a 2xx HTTP status code is returned and the failover test job is created.
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
   * The failover test job type. Valid values:
   * 
   * - **StartNow**: starts immediately. The test job starts executing immediately after it is created.
   * 
   * - **StartLater**: does not start. Only creates the test job without executing it.
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
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of test resource IDs. You can add up to 16 test resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the test resource. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
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

