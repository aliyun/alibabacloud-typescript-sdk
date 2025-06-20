// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The compliance evaluation result of the resource. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The configuration of the resource.
   * 
   * @example
   * {\\"AccessControlList\\":{\\"Grant\\":\\"private\\"},\\"ServerSideEncryptionRule\\":{\\"SSEAlgorithm\\":\\"None\\"},\\"Comment\\":\\"\\",\\"CreationDate\\":\\"2021-06-29T10:05:12.000Z\\",\\"Owner\\":{\\"DisplayName\\":\\"100931896542****\\",\\"ID\\":\\"100931896542****\\"},\\"StorageClass\\":\\"Standard\\",\\"DataRedundancyType\\":\\"LRS\\",\\"AllowEmptyReferer\\":\\"true\\",\\"Name\\":\\"new-bucket\\",\\"BucketPolicy\\":{\\"LogPrefix\\":\\"\\",\\"LogBucket\\":\\"\\"},\\"ExtranetEndpoint\\":\\"oss-cn-hangzhou.aliyuncs.com\\",\\"IntranetEndpoint\\":\\"oss-cn-hangzhou-internal.aliyuncs.com\\",\\"Location\\":\\"oss-cn-hangzhou\\"}
   */
  configuration?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The timestamp when the resource was created.
   * 
   * @example
   * 1624961112000
   */
  resourceCreationTime?: number;
  /**
   * @remarks
   * Indicates whether the resource was deleted. Valid values:
   * 
   * *   1: The resource was not deleted.
   * *   0: The resource was deleted.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * new-bucket
   */
  resourceName?: string;
  /**
   * @remarks
   * The status of the resource. The value of this parameter varies based on the resource type and may be empty.
   * 
   * *   If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an ECS instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is left empty.
   * 
   * @example
   * offline
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::OSS::BucketACS::CDN::Domain
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * @example
   * {\\"\\"hc\\"\\":[\\"\\"value2\\"\\"]}
   */
  tags?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-t4n7pokxxxxxxxxxxxxxx
   * 
   * **if can be null:**
   * true
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-t4nhheyvay74fp7n0hxxx
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      complianceType: 'ComplianceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      complianceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

