// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceInternetProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If an ID value is available, you must specify it. Otherwise, the call fails.
   * - If the <props="intl"><ph>**Instance overview** page or </ph>ID value is not available, you do not need to specify it.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * This parameter is required.
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The IP protocol version. Valid values:
   * - IPv4 (default)
   * - IPv6
   * 
   * > If the IP protocol version is set to IPv6, streaming media-related addresses are changed to IPv4/IPv6 dual-stack addresses. Make sure that your devices and applications are configured for IPv6. Otherwise, exceptions such as playback screen loading failures may occur.
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

