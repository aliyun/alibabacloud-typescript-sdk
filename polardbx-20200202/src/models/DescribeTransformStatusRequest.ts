// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransformStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The verification report.
   * 
   * @example
   * true
   */
  queryReport?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
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

