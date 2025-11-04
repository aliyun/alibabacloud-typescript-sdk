// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventDetailRequest extends $dara.Model {
  /**
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @example
   * event_info
   */
  detailType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18ba94fea9***e66ba0557b7b91
   */
  eventId?: string;
  /**
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm005
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      detailType: 'DetailType',
      eventId: 'EventId',
      eventScope: 'EventScope',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      detailType: 'string',
      eventId: 'string',
      eventScope: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

