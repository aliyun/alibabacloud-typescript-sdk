// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyResultDataSourceDetails } from "./ListInstancesResponseBodyResultDataSourceDetails";
import { ListInstancesResponseBodyResultNetwork } from "./ListInstancesResponseBodyResultNetwork";
import { ListInstancesResponseBodyResultSpec } from "./ListInstancesResponseBodyResultSpec";
import { ListInstancesResponseBodyResultTags } from "./ListInstancesResponseBodyResultTags";


export class ListInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * ""
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-04T02:03:21Z
   */
  createTime?: string;
  dataSourceDetails?: ListInstancesResponseBodyResultDataSourceDetails[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Emergency test
   */
  description?: string;
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634885083
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
   * ha-cn-2r42n8oh001
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state of the instance.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The network information of the instance.
   */
  network?: ListInstancesResponseBodyResultNetwork;
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  spec?: ListInstancesResponseBodyResultSpec;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  updateTime?: string;
  userName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      dataSourceDetails: 'dataSourceDetails',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      dataSourceDetails: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultDataSourceDetails },
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: ListInstancesResponseBodyResultNetwork,
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: ListInstancesResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceDetails)) {
      $dara.Model.validateArray(this.dataSourceDetails);
    }
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

