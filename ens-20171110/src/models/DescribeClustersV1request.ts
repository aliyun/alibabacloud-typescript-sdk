// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1Request extends $dara.Model {
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cn-hangzhou-58
   */
  ensRegionId?: string;
  /**
   * @remarks
   * System specified parameters. Set the value to **DescribeClustersV1**.
   * 
   * @example
   * test-eck-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ensRegionId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

