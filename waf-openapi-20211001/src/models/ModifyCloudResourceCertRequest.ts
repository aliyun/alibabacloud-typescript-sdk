// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceCertRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 232***-cn-hangzhou
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceCertRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certificates?: ModifyCloudResourceCertRequestCertificates[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ModifyCloudResourceCertRequestCertificates },
      instanceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

