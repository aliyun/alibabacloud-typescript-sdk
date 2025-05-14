// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyInstancesFeatureDBInstanceInfo } from "./ListInstancesResponseBodyInstancesFeatureDbinstanceInfo";


export class ListInstancesResponseBodyInstances extends $dara.Model {
  featureDBInstanceInfo?: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * featureStore-cn-7mz2xfu****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInstanceInfo: 'FeatureDBInstanceInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureDBInstanceInfo: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.featureDBInstanceInfo && typeof (this.featureDBInstanceInfo as any).validate === 'function') {
      (this.featureDBInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

