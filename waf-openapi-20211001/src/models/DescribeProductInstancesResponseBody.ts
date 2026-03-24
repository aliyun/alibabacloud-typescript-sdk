// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The port of the cloud service added to WAF.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **http**: HTTP protocol.
   * 
   * - **https**: HTTPS protocol.
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
   * The type of the HTTPS certificate. Valid values:
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
   * The name of the certificate.
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
   * The information about the certificates.
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
   * The protocol type. Valid values:
   * 
   * - **http**: HTTP protocol.
   * 
   * - **https**: HTTPS protocol.
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
   * The ID of the instance added to WAF.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The port and protocol information of the cloud service added to WAF.
   */
  accessPortAndProtocols?: DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols[];
  /**
   * @remarks
   * The list of ports added to WAF.
   */
  accessPorts?: number[];
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection status of WAF. Valid values:
   * 
   * - **all**: All protected.
   * 
   * - **any**: Protected.
   * 
   * - **part**: Partially protected.
   * 
   * - **non**: Not protected.
   * 
   * @example
   * all
   */
  resourceInstanceAccessStatus?: string;
  /**
   * @remarks
   * The edition of the instance.
   * 
   * @example
   * ecs.e-c1m1.large
   */
  resourceInstanceEdition?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * demoInstanceName
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs-test
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The information about the ports.
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
   * 
   * - **nlb**: NLB.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * - **cn-chengdu**: China (Chengdu).
   * 
   * - **cn-beijing**: China (Beijing).
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * 
   * - **cn-hangzhou**: China (Hangzhou).
   * 
   * - **cn-shanghai**: China (Shanghai).
   * 
   * - **cn-shenzhen**: China (Shenzhen).
   * 
   * - **cn-qingdao**: China (Qingdao).
   * 
   * - **cn-hongkong**: China (Hong Kong).
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
   * The information about the instances.
   */
  productInstances?: DescribeProductInstancesResponseBodyProductInstances[];
  /**
   * @remarks
   * The ID of the request.
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

