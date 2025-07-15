// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceSettingsResponseBodyServiceSettings extends $dara.Model {
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
  /**
   * @remarks
   * The id of RDC Enterprise.
   * 
   * @example
   * RdcEnterpriseId
   */
  rdcEnterpriseId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F755DC9-C0CF-4598-B2E3-2CC763F18CB2
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: GetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': GetServiceSettingsResponseBodyServiceSettings },
    };
  }

  validate() {
    if(Array.isArray(this.serviceSettings)) {
      $dara.Model.validateArray(this.serviceSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

