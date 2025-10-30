// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

