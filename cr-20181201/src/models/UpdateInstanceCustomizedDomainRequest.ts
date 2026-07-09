// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceCustomizedDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21118442
   */
  certId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  certRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry-cn-guangzhou.ack.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-h0tvspmnglam5jw5
   */
  instanceId?: string;
  /**
   * @remarks
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

