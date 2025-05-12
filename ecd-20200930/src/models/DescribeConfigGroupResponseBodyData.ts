// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources that are bound to the configuration group.
   * 
   * @example
   * 4
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of bound cloud computers.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  description?: string;
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * @example
   * ccg-0cid8v30an12****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  name?: string;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid values:
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
   * Valid values:
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

