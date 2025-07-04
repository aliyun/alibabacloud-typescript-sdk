// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyResultNetwork } from "./GetInstanceResponseBodyResultNetwork";
import { GetInstanceResponseBodyResultSpec } from "./GetInstanceResponseBodyResultSpec";
import { GetInstanceResponseBodyResultTags } from "./GetInstanceResponseBodyResultTags";


export class GetInstanceResponseBodyResult extends $dara.Model {
  bsVersion?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSYPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * commodityCode
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-17T02:01:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ha3_test
   */
  description?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values: vector and engine.
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634609702
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved.
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-7mz2qsgq301
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The network information of the instance.
   */
  network?: GetInstanceResponseBodyResultNetwork;
  /**
   * @remarks
   * Specifies whether the instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * Specifies whether the instance has only one node.
   * 
   * @example
   * false
   */
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzjvw24el5lma
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node specifications.
   */
  spec?: GetInstanceResponseBodyResultSpec;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   INIT: being initialized
   * *   WAIT_CONFIG: to be configured
   * *   CONFIG_UPDATING: configuration taking effect
   * *   READY: normal
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 1634609702
   */
  updateTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * The version of the engine.
   * 
   * @example
   * ha3_3.10.0
   */
  version?: string;
  zoneCount?: number;
  static names(): { [key: string]: string } {
    return {
      bsVersion: 'bsVersion',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      newMode: 'newMode',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
      zoneCount: 'zoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bsVersion: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: GetInstanceResponseBodyResultNetwork,
      newMode: 'boolean',
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: GetInstanceResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
      zoneCount: 'number',
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

