// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceZoneListRequest extends $dara.Model {
  /**
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceType: 'AccessInstanceType',
      lang: 'Lang',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceType: 'string',
      lang: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

