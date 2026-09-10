// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAvailableVscsRequestArns extends $dara.Model {
  /**
   * @remarks
   * The UID of the target account for role assumption.
   * 
   * This parameter is required.
   * 
   * @example
   * 1193522024229156
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::1028257687084022:role/zeus-locationservicerole
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * - service
   * - user
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoreAvailableVscsRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-account authorization role chain, used for cross-account VSC queries in ecs or eflo scenarios.
   */
  arns?: ListKVCacheStoreAvailableVscsRequestArns[];
  /**
   * @remarks
   * The ID of the compute instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-55kl5wq6j6kvtl4xu5tgunddu
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the compute instance. Valid values:
   * 
   * - ecs
   * - eflo
   * - innerECS
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the KVCacheStore instance.
   * 
   * This parameter is required.
   * 
   * @example
   * kvcs-cn-5y44vuqiz001
   */
  kvcsId?: string;
  /**
   * @remarks
   * The region ID, such as cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arns: 'Arns',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      kvcsId: 'KvcsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arns: { 'type': 'array', 'itemType': ListKVCacheStoreAvailableVscsRequestArns },
      instanceId: 'string',
      instanceType: 'string',
      kvcsId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arns)) {
      $dara.Model.validateArray(this.arns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

