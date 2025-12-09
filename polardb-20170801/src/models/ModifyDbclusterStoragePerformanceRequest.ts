// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceRequest extends $dara.Model {
  autoUseCoupon?: boolean;
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
   * 727xxxxxx934
   */
  promotionCode?: string;
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

