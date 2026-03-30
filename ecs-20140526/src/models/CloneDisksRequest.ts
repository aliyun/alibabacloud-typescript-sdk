// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDisksRequestArn extends $dara.Model {
  /**
   * @example
   * null
   */
  assumeRoleFor?: string;
  /**
   * @example
   * null
   */
  roleType?: string;
  /**
   * @example
   * null
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDisksRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDisksRequest extends $dara.Model {
  arn?: CloneDisksRequestArn[];
  /**
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @example
   * key-szz67b2f696f4wh9yeg5d
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerId?: number;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 10
   */
  provisionedIops?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-bp1d6tsvznfghy7y****
   */
  sourceDiskId?: string;
  tag?: CloneDisksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      diskCategory: 'DiskCategory',
      diskName: 'DiskName',
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      kmsKeyId: 'KmsKeyId',
      multiAttach: 'MultiAttach',
      ownerId: 'OwnerId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      size: 'Size',
      sourceDiskId: 'SourceDiskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CloneDisksRequestArn },
      burstingEnabled: 'boolean',
      clientToken: 'string',
      diskCategory: 'string',
      diskName: 'string',
      dryRun: 'string',
      encrypted: 'boolean',
      kmsKeyId: 'string',
      multiAttach: 'string',
      ownerId: 'number',
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      size: 'number',
      sourceDiskId: 'string',
      tag: { 'type': 'array', 'itemType': CloneDisksRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

