// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterTDEResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic key rotation is enabled. Valid values:
   * 
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * > This parameter is returned only when the database engine is PostgreSQL-compatible or Oracle-syntax-compatible.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether automatic encryption of all newly created tables is enabled. Valid values:
   * 
   * - **ON**: Enabled.
   * 
   * - **OFF**: Disabled.
   * > This parameter is returned only when the database engine is MySQL-compatible.
   * 
   * @example
   * ON
   */
  encryptNewTables?: string;
  /**
   * @remarks
   * The custom key ID.
   * 
   * @example
   * 2a4f4ac2-****-****-****-************
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E37D1508-EC3B-4E06-A24A-C7AC31******
   */
  requestId?: string;
  /**
   * @remarks
   * The automatic key rotation interval configured in Key Management Service (KMS). If no automatic key rotation interval is configured, 0 s is returned. Unit: s.
   * 
   * For example, if the rotation interval is 7 days, 604800 s is returned.
   * 
   * > This parameter is returned only when the database engine is PostgreSQL-compatible or Oracle-syntax-compatible and the value of AutomaticRotation is Enabled.
   * 
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The region where the TDE key resides.
   * 
   * @example
   * cn-beijing
   */
  TDERegion?: string;
  /**
   * @remarks
   * Indicates whether TDE is enabled. Valid values:
   * * **Enabled**: Enabled.
   * * **Disabled**: Disabled.
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

