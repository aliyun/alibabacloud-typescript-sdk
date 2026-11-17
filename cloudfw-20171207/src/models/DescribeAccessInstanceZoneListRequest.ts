// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceZoneListRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the synchronization node.
   * 
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @remarks
   * The language type for receiving messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the synchronization node.
   * 
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

