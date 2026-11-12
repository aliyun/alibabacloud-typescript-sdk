// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses the coupon.
   * * false: Does not use the coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to enable I/O performance burst for the ESSD AutoPL cloud disk. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled (default).
   * 
   * > This parameter is supported only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates the token to ensure uniqueness across different requests. The token is case-sensitive and can contain up to 64 ASCII characters.
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
   * * **Upgrade**: Upgrades the specifications.
   * * **Downgrade**: Downgrades the specifications.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read and write IOPS for the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.</p>
   * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>Baseline performance = min{1,800 + 50 × Capacity, 50,000}.</p>
   * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>This parameter is supported only when StorageType is set to ESSDAUTOPL.</note>
   * 
   * @example
   * 2500
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The target storage type. Valid values for Enterprise Edition:
   * - **PSL5**
   * - **PSL4**
   * 
   * Valid values for Standard Edition:
   * - **ESSDPL0**
   * - **ESSDPL1**
   * - **ESSDPL2**
   * - **ESSDPL3**
   * - **ESSDAUTOPL**
   * 
   * ## Storage type change paths from source to target
   * Before you call this operation, you can call DescribeDBClusterAttribute to query the current StorageType, and then select the target StorageType and ModifyType based on the current type.
   * 
   * | Cluster edition | Current type | Target StorageType | ModifyType |
   * | --- | --- | --- | --- |
   * | Enterprise Edition | PSL4 | PSL5 | Upgrade |
   * | Standard Edition | ESSDPL0 | ESSDPL1, ESSDPL2, ESSDPL3, or ESSDAUTOPL | Upgrade |
   * | Standard Edition | ESSDPL1 | ESSDPL2, ESSDPL3, or ESSDAUTOPL | Upgrade |
   * | Standard Edition | ESSDPL2 | ESSDPL3 | Upgrade |
   * | Standard Edition | ESSDPL2 | ESSDPL1 or ESSDAUTOPL | Downgrade |
   * | Standard Edition | ESSDPL3 | ESSDPL1, ESSDPL2, or ESSDAUTOPL | Downgrade |
   * 
   * > Enterprise Edition does not support downgrading from PSL5 to PSL4. Standard Edition does not support downgrading to ESSDPL0 or downgrading from ESSDPL1. You cannot change ESSDAUTOPL to other storage types. However, you can retain ESSDAUTOPL and only adjust the provisioned IOPS or I/O burst configurations. In-place changes between Enterprise Edition PSL and Standard Edition ESSD types are not supported. This table lists the verified paths. Specific requests must still meet the requirements for cluster edition, cooldown period for specification changes, and IOPS limits. Operation description: This storage change path matrix describes the supported source-to-target storage type conversion directions and the corresponding ModifyType values for each cluster edition (Enterprise Edition or Standard Edition).
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

