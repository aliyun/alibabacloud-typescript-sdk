// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiscoveredResourceBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The regions where the resources reside. Separate multiple regions with commas (`,`).
   * 
   * @example
   * cn-shanghai,cn-hongkong,cn-zhangjiakou,cn-hangzhou
   */
  regions?: string;
  /**
   * @remarks
   * The resource IDs. Separate multiple resource IDs with commas (`,`).
   * 
   * @example
   * r-wz998f311e21****,r-wz97f4a73478****
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (`,`).
   * 
   * @example
   * ACS::ECS::Disk,ACS::ECS::Instance
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

