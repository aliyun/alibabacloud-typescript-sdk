// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSAGDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The control status of the Smart Access Gateway device. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Abnormal**: Abnormal.
   * 
   * @example
   * Normal
   */
  controllerState?: string;
  /**
   * @remarks
   * The most recent time when the Smart Access Gateway device connected to the controller.
   * 
   * @example
   * 2021-07-14 00:27:48
   */
  lastConnectedControllerTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6A991F4-F533-1627-8144-B64E01C5EE85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the reset button of the Smart Access Gateway device is enabled. Valid values:
   * 
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  resettableStatus?: string;
  /**
   * @remarks
   * The service IP address of the Smart Access Gateway device.
   * 
   * @example
   * 42.XX.XX.151
   */
  serviceIP?: string;
  /**
   * @remarks
   * The type of the Smart Access Gateway device. Valid values:
   * 
   * - **sag-100wm**.
   * - **sag-1000**.
   * 
   * @example
   * sag-100wm
   */
  smartAGType?: string;
  /**
   * @remarks
   * The startup time of the Smart Access Gateway device.
   * 
   * @example
   * 2021-06-15 17:33:43
   */
  startupTime?: string;
  /**
   * @remarks
   * The synchronization status between the local Smart Access Gateway device and the cloud. Valid values:
   * 
   * - **Synchronized**: Synchronization is complete.
   * - **Unsynchronized**: Not synchronized.
   * - **Synchronizing**: Synchronization is in progress.
   * 
   * @example
   * Unsynchronized
   */
  synStatus?: string;
  /**
   * @remarks
   * The software version that runs on the Smart Access Gateway device.
   * 
   * @example
   * 2.3.1.1
   */
  version?: string;
  /**
   * @remarks
   * The VPN connection status of the Smart Access Gateway device. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Abnormal**: Abnormal.
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

