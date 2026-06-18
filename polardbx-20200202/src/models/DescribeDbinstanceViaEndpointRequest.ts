// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceViaEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hz*******.polarx.rds.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
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

