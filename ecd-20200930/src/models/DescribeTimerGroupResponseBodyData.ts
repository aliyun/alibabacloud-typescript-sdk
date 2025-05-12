// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTimerGroupResponseBodyDataConfigTimers } from "./DescribeTimerGroupResponseBodyDataConfigTimers";


export class DescribeTimerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources that are bound to the configuration group.
   * 
   * @example
   * 50
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of bound resources.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The scheduled task configurations.
   */
  configTimers?: DescribeTimerGroupResponseBodyDataConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * @example
   * cg-75aazkg2tnqb2*****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the configuration group.
   */
  name?: string;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The state of the configuration group.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The configuration group is available.
   * *   UNAVAILABLE: The configuration group is deleted.
   * *   DELETING: The configuration group is being deleted.
   * *   UPDATING: The configuration group is being modified.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid value:
   * 
   * *   Timer: the scheduled task type.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      bindCountMap: 'BindCountMap',
      configTimers: 'ConfigTimers',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      productType: 'ProductType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      bindCountMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      configTimers: { 'type': 'array', 'itemType': DescribeTimerGroupResponseBodyDataConfigTimers },
      description: 'string',
      groupId: 'string',
      name: 'string',
      productType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.bindCountMap) {
      $dara.Model.validateMap(this.bindCountMap);
    }
    if(Array.isArray(this.configTimers)) {
      $dara.Model.validateArray(this.configTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

