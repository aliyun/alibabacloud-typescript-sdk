// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterTDEResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic key rotation is allowed. Valid values:
   * 
   * *   **Enabled**: Automatic key rotation is allowed.
   * *   **Disabled**: Automatic key rotation is not allowed.
   * 
   * >  This parameter is returned only for a PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether automatic encryption is enabled for new tables. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * >  This parameter is returned only for a PolarDB for MySQL cluster.
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
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E37D1508-EC3B-4E06-A24A-C7AC31******
   */
  requestId?: string;
  /**
   * @remarks
   * The automatic key rotation period configured in Key Management Service (KMS). If no automatic key rotation period is configured, 0s is returned. Unit: seconds.
   * 
   * For example, if the rotation period is set to 7 days, 604800s is returned.
   * 
   * >  This parameter is returned only for a PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle) cluster whose AutomaticRotation parameter is set to Enabled.
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
   * Indicates whether TDE encryption is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
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

