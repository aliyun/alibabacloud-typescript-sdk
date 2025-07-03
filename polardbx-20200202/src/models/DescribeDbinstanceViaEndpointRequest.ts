// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceViaEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hz*******.polarx.rds.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
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

