// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZones extends $dara.Model {
  /**
   * @example
   * 1-1-1
   */
  deployType?: string;
  /**
   * @example
   * NORMAL
   */
  series?: string;
  /**
   * @example
   * cn-hangzhou-i,cn-hangzhou-j,cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @example
   * H/I/J
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      series: 'Series',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'string',
      series: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

