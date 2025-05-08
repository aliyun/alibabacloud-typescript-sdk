// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyResourceDetailInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * 5JhF100NEgdBcpNren32
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the cloud device.
   * 
   * @example
   * h-uf6009zoaexs5pefypbo
   */
  ID?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 120.27.219.219
   */
  IP?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * @example
   * cmcc
   */
  ISP?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-2ze40oyhjorpyw61k7be
   */
  imageID?: string;
  /**
   * @remarks
   * The media access control (MAC) address of the device.
   * 
   * @example
   * AA:BB:77:88:99:03
   */
  mac?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionID?: string;
  /**
   * @remarks
   * The server name of the ENS node.
   * 
   * @example
   * ens-nc2
   */
  server?: string;
  /**
   * @remarks
   * The status of the device.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the device.
   * 
   * @example
   * ens.ac6.large
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      ID: 'ID',
      IP: 'IP',
      ISP: 'ISP',
      imageID: 'ImageID',
      mac: 'Mac',
      regionID: 'RegionID',
      server: 'Server',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      ID: 'string',
      IP: 'string',
      ISP: 'string',
      imageID: 'string',
      mac: 'string',
      regionID: 'string',
      server: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

