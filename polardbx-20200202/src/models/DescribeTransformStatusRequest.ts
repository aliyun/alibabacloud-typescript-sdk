// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransformStatusRequest extends $dara.Model {
  /**
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * true
   */
  queryReport?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      queryReport: 'QueryReport',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      queryReport: 'boolean',
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

