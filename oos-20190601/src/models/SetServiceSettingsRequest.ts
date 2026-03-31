// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetServiceSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of OSS bucket to deliver.
   * 
   * @example
   * OssBucketName
   */
  deliveryOssBucketName?: string;
  /**
   * @remarks
   * Whether to enable OSS delivery.
   * 
   * @example
   * false
   */
  deliveryOssEnabled?: boolean;
  /**
   * @remarks
   * The key prefix of OSS to deliver.
   * 
   * @example
   * oos/execution
   */
  deliveryOssKeyPrefix?: string;
  /**
   * @remarks
   * Whether to enable SLS delivery.
   * 
   * @example
   * false
   */
  deliverySlsEnabled?: boolean;
  /**
   * @remarks
   * The name of SLS project to deliver.
   * 
   * @example
   * SlsProjectName
   */
  deliverySlsProjectName?: string;
  rdFolderIds?: string[];
  /**
   * @remarks
   * The id of RDC Enterprise.
   * 
   * @example
   * RdcEnterpriseId
   */
  rdcEnterpriseId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * **if can be null:**
   * true
   */
  serviceAccessRdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdFolderIds: 'RdFolderIds',
      rdcEnterpriseId: 'RdcEnterpriseId',
      regionId: 'RegionId',
      serviceAccessRdEnabled: 'ServiceAccessRdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
      rdcEnterpriseId: 'string',
      regionId: 'string',
      serviceAccessRdEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.rdFolderIds)) {
      $dara.Model.validateArray(this.rdFolderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

