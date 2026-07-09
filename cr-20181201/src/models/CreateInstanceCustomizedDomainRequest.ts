// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceCustomizedDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom domain name certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 21428921
   */
  certId?: string;
  /**
   * @remarks
   * The region to which the certificate belongs.
   * 
   * @example
   * cn-hangzhou
   */
  certRegionId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The custom module name.
   * 
   * This parameter is required.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      domain: 'Domain',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certRegionId: 'string',
      domain: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

