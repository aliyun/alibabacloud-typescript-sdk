// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagWifiRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   **NONE**
   * *   **WPA-PSK**
   * *   **WPA2-PSK**
   * 
   * @example
   * WPA2-PSK
   */
  authenticationType?: string;
  /**
   * @remarks
   * The bandwidth of the channel. Valid values:
   * 
   * *   **Automatic**
   * *   **20 MHz**
   * *   **40 MHz**
   * 
   * @example
   * 20 MHz
   */
  bandwidth?: string;
  /**
   * @remarks
   * The Wi-Fi channel.
   * 
   * Valid values: **0 to 11**.
   * 
   * @example
   * 0
   */
  channel?: string;
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   **AUTO**: automatically selects the encryption algorithm.
   * *   **TKIP**: uses the Temporal Key Integrity Protocol (TKIP).
   * *   **AES**: uses the Advanced Encryption Standard authorized by Wi-Fi®.
   * 
   * @example
   * AUTO
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether wireless security is enabled. Valid values:
   * 
   * *   **true**: enables wireless security.
   * *   **False**: disables wireless security.
   * 
   * @example
   * True
   */
  isAuth?: string;
  /**
   * @remarks
   * Specifies whether broadcast over Wi-Fi is enabled. Valid values:
   * 
   * *   **true**: enables broadcast.
   * *   **False**: disables broadcast.
   * 
   * >  Only after you enable broadcast, terminals that support wireless connections can search the Wi-Fi network by its SSID and receive Wi-Fi signals.
   * 
   * @example
   * True
   */
  isBroadcast?: string;
  /**
   * @remarks
   * Specifies whether Wi-Fi is enabled. Valid values:
   * 
   * *   **true**: enables Wi-Fi.
   * *   **False**: disables Wi-Fi.
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  isEnable?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password used to connect to the Wi-Fi network.
   * 
   * The password must be 8 to 32 characters in length, and can contain digits and letters.
   * 
   * @example
   * 12345678
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service set identifier (SSID) of the Wi-Fi network.
   * 
   * The name must be 1 to 31 characters in length, and can contain digits and letters.
   * 
   * @example
   * aliyun_sag_123456****
   */
  SSID?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      bandwidth: 'Bandwidth',
      channel: 'Channel',
      encryptAlgorithm: 'EncryptAlgorithm',
      isAuth: 'IsAuth',
      isBroadcast: 'IsBroadcast',
      isEnable: 'IsEnable',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSID: 'SSID',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      bandwidth: 'string',
      channel: 'string',
      encryptAlgorithm: 'string',
      isAuth: 'string',
      isBroadcast: 'string',
      isEnable: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSID: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

