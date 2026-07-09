// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceCustomizedDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 24858802
   */
  certId?: string;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @example
   * docker-images.qu-in.club
   */
  domain?: string;
  /**
   * @example
   * USER
   */
  domainType?: string;
  /**
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @example
   * cri-4ec5xvj4j0l****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @example
   * Chart
   */
  moduleName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      code: 'Code',
      createTime: 'CreateTime',
      domain: 'Domain',
      domainType: 'DomainType',
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      moduleName: 'ModuleName',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      code: 'string',
      createTime: 'number',
      domain: 'string',
      domainType: 'string',
      endpointType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      moduleName: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

