// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetServiceSettingsResponseBodyServiceSettings extends $dara.Model {
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
   * true
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

export class SetServiceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBEC8072-BEC2-478E-8EAE-E723BA79CF19
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: SetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': SetServiceSettingsResponseBodyServiceSettings },
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

