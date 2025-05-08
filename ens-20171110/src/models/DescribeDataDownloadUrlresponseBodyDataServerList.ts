// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDownloadURLResponseBodyDataServerList extends $dara.Model {
  /**
   * @remarks
   * The host address of the file server.
   * 
   * @example
   * 1.1.1.1:8080
   */
  host?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-chenzhou-5
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
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

