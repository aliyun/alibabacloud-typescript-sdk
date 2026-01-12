// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1Request extends $dara.Model {
  /**
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * cn-hangzhou-58
   */
  ensRegionId?: string;
  /**
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

