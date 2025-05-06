// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the I/O Burst feature for the ESSD AutoPL disk. Valid value:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is available only when the StorageType parameter is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @example
   * Upgrade
   */
  modifyType?: string;
  /**
   * @example
   * 2500
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  /**
   * @example
   * ESSDAUTOPL
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      modifyType: 'ModifyType',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      modifyType: 'string',
      provisionedIops: 'number',
      resourceOwnerId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

