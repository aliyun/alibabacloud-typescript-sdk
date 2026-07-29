// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceCustomizedDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 24858802
   */
  certId?: string;
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * docker-images.qu-in.club
   */
  domain?: string;
  /**
   * @remarks
   * The domain type.
   * 
   * @example
   * USER
   */
  domainType?: string;
  /**
   * @remarks
   * The custom endpoint type.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-4ec5xvj4j0l****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The custom module name.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

