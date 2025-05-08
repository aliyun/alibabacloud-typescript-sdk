// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the CHAP protocol.
   * 
   * @example
   * Password
   */
  authPassword?: string;
  /**
   * @remarks
   * The authentication protocol. Set the value to **CHAP**.
   * 
   * @example
   * CHAP
   */
  authProtocol?: string;
  /**
   * @remarks
   * The username of the CHAP protocol.
   * 
   * @example
   * User
   */
  authUser?: string;
  /**
   * @remarks
   * The description of the volume. The description must be 2 to 128 characters in length. The description cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-3
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sgw-****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication. Valid values:
   * 
   * *   **1**: Authentication is enabled.
   * *   **0** (default): Authentication is disabled.
   * 
   * @example
   * 0
   */
  isAuth?: string;
  /**
   * @remarks
   * Indicates whether the volume is enabled. Valid values:
   * 
   * *   **1** (default): The volume is enabled.
   * *   **0**: The volume is disabled.
   * 
   * @example
   * 1
   */
  isEnable?: string;
  /**
   * @remarks
   * The ID of the storage medium.
   * 
   * This parameter is required.
   * 
   * @example
   * si-****
   */
  storageId?: string;
  /**
   * @remarks
   * The name of the volume. The name must be 2 to 128 characters in length. The name cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testVolumeName
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      authPassword: 'AuthPassword',
      authProtocol: 'AuthProtocol',
      authUser: 'AuthUser',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      gatewayId: 'GatewayId',
      isAuth: 'IsAuth',
      isEnable: 'IsEnable',
      storageId: 'StorageId',
      volumeName: 'VolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPassword: 'string',
      authProtocol: 'string',
      authUser: 'string',
      description: 'string',
      ensRegionId: 'string',
      gatewayId: 'string',
      isAuth: 'string',
      isEnable: 'string',
      storageId: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

