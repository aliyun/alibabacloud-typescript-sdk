// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDBInstancesNodes extends $dara.Model {
  /**
   * @example
   * polarx.x4.large.2e
   */
  classCode?: string;
  id?: string;
  /**
   * @example
   * cn-hangzhou-g-aliyun
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      id: 'Id',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      id: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

