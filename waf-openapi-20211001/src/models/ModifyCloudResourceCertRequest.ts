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
  cloudResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 443
   * 
   * @deprecated
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
   * @example
   * lb-bp1*****jqnnqk5uj2p
   * 
   * @deprecated
   */
  resourceInstanceId?: string;
  /**
   * @example
   * clb4
   * 
   * @deprecated
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cloudResourceId: 'CloudResourceId',
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
      cloudResourceId: 'string',
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

