// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceDefaultCertRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lb-***-80-clb7
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-kf74****
   */
  instanceId?: string;
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
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cloudResourceId: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

