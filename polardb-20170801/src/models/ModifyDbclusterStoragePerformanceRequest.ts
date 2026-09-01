// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): uses coupons.
   * * false: does not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to enable I/O performance burst for the ESSD AutoPL cloud disk. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled (default).
   * 
   * > This parameter is supported only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain only ASCII characters. The token can be up to 64 characters in length.
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
   * The type of the specification change. Valid values: 
   * * **Upgrade**: upgrades the specifications.
   * * **Downgrade**: downgrades the specifications.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is not specified, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.</p>
   * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>Baseline performance = min{1,800 + 50 × Capacity, 50000}.</p>
   * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>This parameter is supported only when StorageType is set to ESSDAUTOPL.</note>
   * 
   * @example
   * 2500
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The target storage type. Valid values for PolarDB Enterprise Edition:
   * - **PSL5**
   * - **PSL4**
   * 
   * Valid values for PolarDB for MySQL Standard Edition:
   * - **ESSDPL0**
   * - **ESSDPL1**
   * - **ESSDPL2**
   * - **ESSDPL3**
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

