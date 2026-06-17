// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceRequest extends $dara.Model {
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies if the I/O performance burst feature is enabled for an ESSD AutoPL disk. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled (Default)
   * 
   * > This parameter applies only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * A client-generated token that ensures request idempotence. The token must be unique for each request. It is case-sensitive and can be up to 64 ASCII characters long.
   * 
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The modification type. Valid values:
   * 
   * - **Upgrade**: Upgrades the storage performance.
   * 
   * - **Downgrade**: Downgrades the storage performance.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Valid values: 0 to min{50,000, 1000 \\* capacity - baseline performance}.
   * 
   * 
   * 
   * <props="china">
   * 
   * Baseline performance = min{1,800 + 50 \\* capacity, 50,000}.
   * 
   * 
   * 
   * <props="china">
   * 
   * > This parameter applies only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * 2500
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The target storage type. Valid values for Enterprise Edition:
   * 
   * - **PSL5**
   * 
   * - **PSL4**
   * 
   * Valid values for Standard Edition:
   * 
   * - **ESSDPL0**
   * 
   * - **ESSDPL1**
   * 
   * - **ESSDPL2**
   * 
   * - **ESSDPL3**
   * 
   * - **ESSDAUTOPL**
   * 
   * @example
   * ESSDAUTOPL
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      modifyType: 'ModifyType',
      promotionCode: 'PromotionCode',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      burstingEnabled: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      modifyType: 'string',
      promotionCode: 'string',
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

