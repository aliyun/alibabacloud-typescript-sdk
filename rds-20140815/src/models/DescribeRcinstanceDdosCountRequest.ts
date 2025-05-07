// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceDdosCountRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  ddosRegionId?: string;
  /**
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

