// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterTDEResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic key rotation is allowed. Valid values:
   * 
   * - **Enabled**: Automatic key rotation is allowed.
   * 
   * - **Disabled**: Automatic key rotation is not allowed.
   * 
   * > This parameter is returned only when the database engine is compatible with PostgreSQL or Oracle syntax.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The unique ID of the cluster.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether automatic encryption is enabled for all newly created tables. Valid values:
   * 
   * - **ON**: Automatic encryption is enabled.
   * 
   * - **OFF**: Automatic encryption is disabled.
   * 
   * > This parameter is returned only when the database engine is compatible with MySQL.
   * 
   * @example
   * ON
   */
  encryptNewTables?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * 2a4f4ac2-****-****-****-************
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * 
   * - **Enabled**: The key is enabled.
   * 
   * - **Disabled**: The key is disabled.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * E37D1508-EC3B-4E06-A24A-C7AC31******
   */
  requestId?: string;
  /**
   * @remarks
   * The automatic key rotation interval configured in KMS. If no automatic key rotation interval is set, 0 s is returned. Unit: s.
   * 
   * For example, if the rotation interval is 7 days, 604800 s is returned.
   * 
   * > This parameter is returned only when the database engine is compatible with PostgreSQL or Oracle syntax, and the value of `AutomaticRotation` is `Enabled`.
   * 
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The region where the TDE key is located.
   * 
   * @example
   * cn-beijing
   */
  TDERegion?: string;
  /**
   * @remarks
   * Indicates whether TDE encryption is enabled. Valid values:
   * 
   * - **Enabled**: TDE encryption is enabled.
   * 
   * - **Disabled**: TDE encryption is disabled.
   * 
   * @example
   * Enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      automaticRotation: 'AutomaticRotation',
      DBClusterId: 'DBClusterId',
      encryptNewTables: 'EncryptNewTables',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      TDERegion: 'TDERegion',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticRotation: 'string',
      DBClusterId: 'string',
      encryptNewTables: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      TDERegion: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

