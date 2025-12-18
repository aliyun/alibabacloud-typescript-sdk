// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiscoveredResourceBatchRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai,cn-hongkong,cn-zhangjiakou,cn-hangzhou
   */
  regions?: string;
  /**
   * @example
   * r-wz998f311e21exxx,r-wz97f4a734789xxx
   */
  resourceIds?: string;
  /**
   * @example
   * ACS::ECS::Disk
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      resourceIds: 'ResourceIds',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
      resourceIds: 'string',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

