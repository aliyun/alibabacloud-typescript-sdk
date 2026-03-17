// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSAGDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The control status of the SAG device. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Abnormal**: abnormal
   * 
   * @example
   * Normal
   */
  controllerState?: string;
  /**
   * @remarks
   * The last time when the SAG device was connected to Alibaba Cloud.
   * 
   * @example
   * 2021-07-14 00:27:48
   */
  lastConnectedControllerTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B6A991F4-F533-1627-8144-B64E01C5EE85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the reset button of the SAG device is enabled. Valid values:
   * 
   * *   **Enabled**: enabled
   * *   **Disabled**: disabled
   * 
   * @example
   * Enabled
   */
  resettableStatus?: string;
  /**
   * @remarks
   * The IP address of the SAG device.
   * 
   * @example
   * 42.XX.XX.151
   */
  serviceIP?: string;
  /**
   * @remarks
   * The model of the SAG device. Valid values:
   * 
   * *   **sag-100wm**
   * *   **sag-1000**
   * 
   * @example
   * sag-100wm
   */
  smartAGType?: string;
  /**
   * @remarks
   * The time when the SAG device was started.
   * 
   * @example
   * 2021-06-15 17:33:43
   */
  startupTime?: string;
  /**
   * @remarks
   * Indicates whether the settings of the SAG device are synchronized to Alibaba Cloud. Valid values:
   * 
   * *   **Synchronized**: synchronized
   * *   **Unsynchronized**: unsynchronized
   * *   **Synchronizing**: being synchronized
   * 
   * @example
   * Unsynchronized
   */
  synStatus?: string;
  /**
   * @remarks
   * The version of the SAG device.
   * 
   * @example
   * 2.3.1.1
   */
  version?: string;
  /**
   * @remarks
   * The VPN connection status of the SAG device. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Abnormal**: abnormal
   * 
   * @example
   * Abnormal
   */
  vpnState?: string;
  static names(): { [key: string]: string } {
    return {
      controllerState: 'ControllerState',
      lastConnectedControllerTime: 'LastConnectedControllerTime',
      requestId: 'RequestId',
      resettableStatus: 'ResettableStatus',
      serviceIP: 'ServiceIP',
      smartAGType: 'SmartAGType',
      startupTime: 'StartupTime',
      synStatus: 'SynStatus',
      version: 'Version',
      vpnState: 'VpnState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controllerState: 'string',
      lastConnectedControllerTime: 'string',
      requestId: 'string',
      resettableStatus: 'string',
      serviceIP: 'string',
      smartAGType: 'string',
      startupTime: 'string',
      synStatus: 'string',
      version: 'string',
      vpnState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

