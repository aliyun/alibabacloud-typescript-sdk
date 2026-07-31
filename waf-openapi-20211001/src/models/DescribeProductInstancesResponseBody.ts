// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols extends $dara.Model {
  /**
   * @remarks
   * The list of certificate IDs.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The port of the cloud service that is added to WAF.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **http**: HTTP.
   * - **https**: HTTPS.
   * 
   * @example
   * http
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate type for the HTTPS protocol. Valid values:
   * 
   * - **default**: Default certificate.
   * 
   * - **extension**: Extension certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 1234567
   */
  certificateId?: string;
  /**
   * @remarks
   * The SSL certificate name.
   * 
   * @example
   * demoCertName
   */
  certificateName?: string;
  /**
   * @remarks
   * The domain name bound to the certificate.
   * 
   * @example
   * www.test.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
      certificateName: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePorts extends $dara.Model {
  /**
   * @remarks
   * The list of certificate information.
   */
  certificates?: DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates[];
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The network protocol type. Valid values:
   * - **http**: HTTP.
   * - **https**: HTTPS.
   * 
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates },
      port: 'number',
      protocol: 'string',
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

export class DescribeProductInstancesResponseBodyProductInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the instance that is added to WAF.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The port and protocol information of the cloud service that is added to WAF.
   */
  accessPortAndProtocols?: DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols[];
  /**
   * @remarks
   * The list of ports that are added to WAF.
   */
  accessPorts?: number[];
  /**
   * @remarks
   * The UID of the resource ownership user.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The domain name that is added to WAF.
   * 
   * @example
   * www.c**sw.net
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The WAF protection status. Valid values:
   * 
   * - **all**: Full protection.
   * - **any**: Protected.
   * - **part**: Partial protection.
   * 
   * - **non**: Not protected.
   * 
   * @example
   * all
   */
  resourceInstanceAccessStatus?: string;
  /**
   * @remarks
   * The edition of the cloud service instance.
   * 
   * @example
   * ecs.e-c1m1.large
   */
  resourceInstanceEdition?: string;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the cloud service instance.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The instance name of the cloud service.
   * 
   * @example
   * demoInstanceName
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the cloud service.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The instance name of the cloud service.
   * 
   * @example
   * ecs-test
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The list of port information.
   */
  resourcePorts?: DescribeProductInstancesResponseBodyProductInstancesResourcePorts[];
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * - **clb4**: Layer 4 CLB.
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: ECS.
   * - **nlb**: NLB.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service. Valid values:
   * - **cn-chengdu**: China Southwest 1 (Chengdu).
   * 
   * - **cn-beijing**: China North 2 (Beijing).
   * 
   * - **cn-zhangjiakou**: China North 3 (Zhangjiakou).
   * 
   * - **cn-hangzhou**: China East 1 (Hangzhou).
   * 
   * - **cn-shanghai**: China East 2 (Shanghai).
   * 
   * - **cn-shenzhen**: China South 1 (Shenzhen).
   * 
   * - **cn-qingdao**: China North 1 (Qingdao).
   * 
   * - **cn-hongkong**: Hong Kong (China).
   * 
   * - **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * 
   * - **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessPortAndProtocols: 'AccessPortAndProtocols',
      accessPorts: 'AccessPorts',
      ownerUserId: 'OwnerUserId',
      resourceDomain: 'ResourceDomain',
      resourceInstanceAccessStatus: 'ResourceInstanceAccessStatus',
      resourceInstanceEdition: 'ResourceInstanceEdition',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceName: 'ResourceName',
      resourcePorts: 'ResourcePorts',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessPortAndProtocols: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols },
      accessPorts: { 'type': 'array', 'itemType': 'number' },
      ownerUserId: 'string',
      resourceDomain: 'string',
      resourceInstanceAccessStatus: 'string',
      resourceInstanceEdition: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceName: 'string',
      resourcePorts: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePorts },
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessPortAndProtocols)) {
      $dara.Model.validateArray(this.accessPortAndProtocols);
    }
    if(Array.isArray(this.accessPorts)) {
      $dara.Model.validateArray(this.accessPorts);
    }
    if(Array.isArray(this.resourcePorts)) {
      $dara.Model.validateArray(this.resourcePorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud service information.
   */
  productInstances?: DescribeProductInstancesResponseBodyProductInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDCBAE1E-2B3F-5C13-AD20-844B9473****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      productInstances: 'ProductInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstances: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productInstances)) {
      $dara.Model.validateArray(this.productInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

