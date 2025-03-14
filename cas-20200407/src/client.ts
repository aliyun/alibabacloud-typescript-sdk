// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateCertificateForPackageRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * runtime
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. You cannot specify empty strings as tag keys.
   * 
   * The key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value cannot exceed 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * OSS
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The total number of cloud resources on which certificates are deployed.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      cloudProduct: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponseBodyCasContacts extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * 3304
   */
  id?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 139****0000
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'string',
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponseBodyProductWorkerCount extends $dara.Model {
  /**
   * @remarks
   * The total number of resources of a cloud service in the deployment task.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The name of the cloud service. Valid values:
   * 
   * *   **SLB**: Classic Load Balancer (CLB). This value is supported only at the China site (aliyun.com).
   * *   **LIVE**: ApsaraVideo Live. This value is supported only at the China site (aliyun.com).
   * *   **webHosting**: Cloud Web Hosting. This value is supported only at the China site (aliyun.com).
   * *   **VOD**: ApsaraVideo VOD. This value is supported only at the China site (aliyun.com).
   * *   **CR**: Container Registry. This value is supported only at the China site (aliyun.com).
   * *   **DCDN**: Dynamic Content Delivery Network (DCDN).
   * *   **DDOS**: Anti-DDoS.
   * *   **CDN**: Alibaba Cloud CDN (CDN).
   * *   **ALB**: Application Load Balancer (ALB).
   * *   **APIGateway**: API Gateway.
   * *   **FC**: Function Compute.
   * *   **GA**: Global Accelerator (GA).
   * *   **MSE**: Microservices Engine (MSE).
   * *   **NLB**: Network Load Balancer (NLB).
   * *   **OSS**: Object Storage Service (OSS).
   * *   **SAE**: Serverless App Engine (SAE).
   * *   **TencentCDN**: Tencent Cloud Content Delivery Network (CDN).
   * *   **WAF**: Web Application Firewall (WAF).
   * 
   * @example
   * NLB
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponseBodyCertChain extends $dara.Model {
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * test
   */
  commonName?: string;
  /**
   * @remarks
   * The common name of the issuer.
   * 
   * @example
   * Encryption Everywhere DV TLS CA - G2
   */
  issuerCommonName?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 17322613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 17302633180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The remaining days of the certificate validity period.
   * 
   * @example
   * 1000
   */
  remainDay?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      issuerCommonName: 'IssuerCommonName',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      remainDay: 'RemainDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      issuerCommonName: 'string',
      notAfter: 'number',
      notBefore: 'number',
      remainDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBodyCertList extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The issuance time of the certificate. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * 证书的类型 。取值：
   * 
   * - **CA**：表示CA证书。
   * - **CERT**：表示签发的证书。
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * aliyun.alibaba.com
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether the certificate contains a private key. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  existPrivateKey?: boolean;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 14dcc8afc7578e
   */
  identifier?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * mySSL
   */
  issuer?: string;
  /**
   * @remarks
   * The domain names that are bound to the certificate. Multiple domain names are separated by commas.
   * 
   * @example
   * *.alibaba.com,aliyun.alibaba.com
   */
  sans?: string;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **aliyun**: Alibaba Cloud certificate
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the certificate repository.
   * 
   * @example
   * 2
   */
  whId?: number;
  /**
   * @remarks
   * The instance ID of the certificate repository.
   * 
   * @example
   * test_whInstanceId
   */
  whInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certType: 'CertType',
      commonName: 'CommonName',
      existPrivateKey: 'ExistPrivateKey',
      identifier: 'Identifier',
      issuer: 'Issuer',
      sans: 'Sans',
      sourceType: 'SourceType',
      status: 'Status',
      whId: 'WhId',
      whInstanceId: 'WhInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certType: 'string',
      commonName: 'string',
      existPrivateKey: 'boolean',
      identifier: 'string',
      issuer: 'string',
      sans: 'string',
      sourceType: 'string',
      status: 'string',
      whId: 'number',
      whInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponseBodyCertWarehouseList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the certificate application repository expires. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID of the certificate application repository.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the certificate application repository has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The name of the certificate application repository.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the private CA.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  pcaInstanceId?: string;
  /**
   * @remarks
   * The queries per second (QPS).
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The type of the certificate application repository. Valid values:
   * 
   * *   **ssl**: certificate application repository of SSL certificates
   * *   **uploadPCA**: certificate application repository of uploaded private certificates
   * *   **free**: certificate application repository of free certificates, available only on the China site (aliyun.com)
   * *   **aliyunPCA**: certificate application repository of private certificates purchased from Alibaba Cloud Private Certificate Authority (PCA), available only on the China site (aliyun.com)
   * *   **disable**: disabled certificate application repository
   * 
   * @example
   * aliyunPCA
   */
  type?: string;
  /**
   * @remarks
   * The ID of the certificate application repository.
   * 
   * @example
   * 1
   */
  whId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isExpired: 'IsExpired',
      name: 'Name',
      pcaInstanceId: 'PcaInstanceId',
      qps: 'Qps',
      type: 'Type',
      whId: 'WhId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      isExpired: 'boolean',
      name: 'string',
      pcaInstanceId: 'string',
      qps: 'number',
      type: 'string',
      whId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessResponseBodyCloudAccessList extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used to access the cloud service.
   * 
   * @example
   * 888
   */
  accessId?: number;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The AccessKey secret used to access the cloud service.
   * 
   * @example
   * LTAI4G5KAZCJQqdwPBAXXXX
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * normal
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      cloudName: 'CloudName',
      secretId: 'SecretId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'number',
      cloudName: 'string',
      secretId: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1737795520000
   */
  certEndTime?: string;
  /**
   * @remarks
   * The ID of the certificate bound to the cloud resource.
   * 
   * @example
   * 12433121
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate bound to the cloud resource.
   * 
   * @example
   * shop.amsaudio.cn
   */
  certName?: string;
  /**
   * @remarks
   * The start date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1706259520000
   */
  certStartTime?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * >  This parameter is returned only when you deploy certificates to cloud services of third-party clouds.
   * 
   * @example
   * 1234
   */
  cloudAccessId?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * Valid values:
   * 
   * *   Tencent
   * *   Huawei
   * *   Aws
   * *   aliyun
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * ALB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service provider to which the cloud resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  cloudRegion?: string;
  /**
   * @remarks
   * Indicates whether the cloud resource is the default resource. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 0
   */
  defaultResource?: number;
  /**
   * @remarks
   * The domain name bound to the cloud resource.
   * 
   * @example
   * www.tkgeo.ru
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled for the cloud resource. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * @example
   * 1
   */
  enableHttps?: number;
  /**
   * @remarks
   * The time when the cloud resource was created. The time is a timestamp in seconds.
   * 
   * @example
   * 1673423339000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cloud resource was last modified. The time is a timestamp in seconds.
   * 
   * @example
   * 1696911946000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * 2356
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * nlb-rv05agjc97ovm14il5
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * lsn-jiugof6t23et66lsnc@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 8047
   */
  listenerPort?: string;
  /**
   * @remarks
   * The region ID of the cloud resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cloud resource.
   * 
   * @example
   * BUY
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether an Alibaba Cloud SSL certificate is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is required only when you deploy certificates to services of multiple clouds.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1666884372152785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certEndTime: 'CertEndTime',
      certId: 'CertId',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      cloudAccessId: 'CloudAccessId',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      domain: 'Domain',
      enableHttps: 'EnableHttps',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      regionId: 'RegionId',
      status: 'Status',
      useSsl: 'UseSsl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certEndTime: 'string',
      certId: 'number',
      certName: 'string',
      certStartTime: 'string',
      cloudAccessId: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'number',
      domain: 'string',
      enableHttps: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      listenerId: 'string',
      listenerPort: 'string',
      regionId: 'string',
      status: 'string',
      useSsl: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponseBodyContactList extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * 519580
   */
  contactId?: number;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address passed the verification.
   * 
   * @example
   * 1
   */
  emailStatus?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 139****8888
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the phone number was verified.
   * 
   * @example
   * 1
   */
  mobileStatus?: number;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * ty-yaoyue.com
   */
  name?: string;
  /**
   * @remarks
   * The webhook URL of the chatbot.
   * 
   * @example
   * [\\"https://open.feishu.cn/open-apis/bot/v2/hook/XXX\\",\\"https://oapi.dingtalk.com/robot/send?access_token=XXX\\",\\"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXX\\"]
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      email: 'Email',
      emailStatus: 'EmailStatus',
      mobile: 'Mobile',
      mobileStatus: 'MobileStatus',
      name: 'Name',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      email: 'string',
      emailStatus: 'number',
      mobile: 'string',
      mobileStatus: 'number',
      name: 'string',
      webhooks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrResponseBodyCsrList extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, SM2, and ECC.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The name of the company.
   * 
   * @example
   * corp_name
   */
  corpName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. For example, you can use CN to indicate China and use US to indicate the United States. The default value is the code of the country or region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued. For more information about country codes, see the "Country codes" section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * @example
   * 3454
   */
  csrId?: number;
  /**
   * @remarks
   * The department that uses the certificate.
   * 
   * @example
   * IT
   */
  department?: string;
  /**
   * @remarks
   * Indicates whether the certificate contains a private key.
   * 
   * @example
   * true
   */
  hasPrivateKey?: boolean;
  /**
   * @remarks
   * The public key that is calculated by using the SHA256 algorithm.
   * 
   * @example
   * 1234
   */
  keySha2?: string;
  /**
   * @remarks
   * The key length that is used by the algorithm. The key length for RSA algorithms can be 2,048, 3,072, and 4,096 bits. The key length for ECC and SM2 algorithms can be 256 bits.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The city where the company is located.
   * 
   * @example
   * Beijing
   */
  locality?: string;
  /**
   * @remarks
   * The name of the CSR.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The province or location.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The secondary domain names. Separate multiple domain names with commas (,).
   * 
   * @example
   * www.example.com,www.aliyundoc.com
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      corpName: 'CorpName',
      countryCode: 'CountryCode',
      csrId: 'CsrId',
      department: 'Department',
      hasPrivateKey: 'HasPrivateKey',
      keySha2: 'KeySha2',
      keySize: 'KeySize',
      locality: 'Locality',
      name: 'Name',
      province: 'Province',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      corpName: 'string',
      countryCode: 'string',
      csrId: 'number',
      department: 'string',
      hasPrivateKey: 'boolean',
      keySha2: 'string',
      keySize: 'number',
      locality: 'string',
      name: 'string',
      province: 'string',
      sans: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain names bound to the certificate of the deployment task.
   * 
   * @example
   * aliyundoc1.com,aliyundoc2.com,aliyundoc3.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **buy**: purchased certificate
   * *   **free**: free certificate, available only on the China site (aliyun.com)
   * 
   * @example
   * upload
   */
  certType?: string;
  /**
   * @remarks
   * Indicates whether the deployment task is deleted. Valid values:
   * 
   * *   **0**: not deleted
   * *   **1**: deleted
   * 
   * @example
   * 1
   */
  del?: number;
  /**
   * @remarks
   * The end time of the deployment task.
   * 
   * @example
   * 1606482979000
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the deployment task was created.
   * 
   * @example
   * 1624343180000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment task was last modified.
   * 
   * @example
   * 1606482979000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the deployment task. You can use the ID to query the details and status of the deployment task.
   * 
   * @example
   * 19975
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the deployment task.
   * 
   * @example
   * cas-job-user-0gvntn
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the deployment task.
   * 
   * *   **cloud**: multi-cloud deployment task.
   * *   **user**: cloud service deployment task. This type of task does not support ECS instances.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * @example
   * job-test
   */
  name?: string;
  /**
   * @remarks
   * The cloud service included in the resources of the deployment task.
   * 
   * @example
   * NLB
   */
  productName?: string;
  /**
   * @remarks
   * Indicates whether the rollback worker is included. For example, if a cloud service involved in a deployment task has been rolled back, **1** is returned. Valid values:
   * 
   * *   **0**: The rollback worker is not included.
   * *   **1**: The rollback worker is included.
   * 
   * @example
   * 1
   */
  rollback?: number;
  /**
   * @remarks
   * The time when the deployment task was scheduled.
   * 
   * @example
   * 1606482979000
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the deployment task.
   * 
   * @example
   * 1606482979000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deployment task. Valid values:
   * 
   * *   **pending**
   * *   **editing**
   * *   **scheduling**
   * *   **processing**
   * *   **error**
   * *   **success**
   * 
   * @example
   * scheduling
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1666884372152785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certDomain: 'CertDomain',
      certType: 'CertType',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomain: 'string',
      certType: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The algorithm of the certificate public key.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 11174100
   */
  certId?: number;
  /**
   * @remarks
   * The instance ID of the certificate.
   * 
   * @example
   * cas-ivauto-2crxzi
   */
  certInstanceId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * edkog.shop
   */
  certName?: string;
  /**
   * @remarks
   * The type of the certificate order. Valid values:
   * 
   * *   **upload**: uploaded certificate.
   * *   **buy**: purchased certificate.
   * *   **free**: free certificate. This value is available only on the China site (aliyun.com).
   * 
   * @example
   * buy
   */
  certOrderType?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * DV
   */
  certType?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * vaultwebhook.vault-webhook.svc
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether the certificate is hosted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isTrustee?: boolean;
  /**
   * @remarks
   * The month in which the certificate is applied for.
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * The end time of the validity period of the certificate. The value is a timestamp in seconds.
   * 
   * @example
   * 1683625266108
   */
  notAfterTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the certificate. The value is a timestamp in seconds.
   * 
   * @example
   * 1683625266108
   */
  notBeforeTime?: number;
  /**
   * @remarks
   * The ID of the certificate order.
   * 
   * >  If CertId is returned, this parameter is not returned.
   * 
   * @example
   * 6127067
   */
  orderId?: number;
  /**
   * @remarks
   * The subject alternative name (SAN) extensions of the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The status code of the certificate. Valid values:
   * 
   * *   **payed**: paid and pending application
   * *   **checking**: being validated
   * *   **checkedFail**: validation failed
   * *   **revoked**: revoked
   * *   **revokeChecking**: revocation request being validated
   * *   **issued**: issued (excluding hosted certificates that are issued, certificates that are about to expire, expired certificates, and uploaded certificates)
   * *   **trustee**: hosted and issued
   * *   **upload**: uploaded (excluding certificates that are about to expire and expired certificates)
   * *   **willExpired**: about to expire (including certificates issued by using the Certificate Management Service console and uploaded certificates)
   * *   **expired**: expired (including certificates issued by using the Certificate Management Service console and uploaded certificates)
   * *   **validity**: valid (including certificates that are not expired or revoked)
   * *   **refund**: refunded
   * *   **closed**: closed
   * 
   * @example
   * issued
   */
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certId: 'CertId',
      certInstanceId: 'CertInstanceId',
      certName: 'CertName',
      certOrderType: 'CertOrderType',
      certType: 'CertType',
      commonName: 'CommonName',
      isTrustee: 'IsTrustee',
      month: 'Month',
      notAfterTime: 'NotAfterTime',
      notBeforeTime: 'NotBeforeTime',
      orderId: 'OrderId',
      sans: 'Sans',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certInstanceId: 'string',
      certName: 'string',
      certOrderType: 'string',
      certType: 'string',
      commonName: 'string',
      isTrustee: 'boolean',
      month: 'number',
      notAfterTime: 'number',
      notBeforeTime: 'number',
      orderId: 'number',
      sans: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sans)) {
      $dara.Model.validateArray(this.sans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1681956830000
   */
  certEndTime?: string;
  /**
   * @remarks
   * The ID of the certificate bound to the cloud resource.
   * 
   * @example
   * 11599949
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate bound to the cloud resource.
   * 
   * @example
   * sc-SSL
   */
  certName?: string;
  /**
   * @remarks
   * The start date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1681956830000
   */
  certStartTime?: string;
  /**
   * @remarks
   * The AccessKey ID used to access cloud resources.
   * 
   * >  This parameter is required only when you deploy certificates to services of multiple clouds.
   * 
   * @example
   * 1234
   */
  cloudAccessId?: string;
  /**
   * @remarks
   * The cloud service provider of the cloud resource. Valid values:
   * 
   * *   **aliyun**: Alibaba Cloud
   * *   **Tencent**: Tencent Cloud
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service. Valid values:
   * 
   * *   **CDN**: Alibaba Cloud CDN (CDN). This value is supported only at the China site (aliyun.com).
   * *   **SLB**: Classic Load Balancer (CLB). This value is supported only at the China site (aliyun.com).
   * *   **DCDN**: Dynamic Content Delivery Network (DCDN). This value is supported only at the China site (aliyun.com).
   * *   **DDOS**: Anti-DDoS. This value is supported only at the China site (aliyun.com).
   * *   **LIVE**: ApsaraVideo Live. This value is supported only at the China site (aliyun.com).
   * *   **webHosting**: Cloud Web Hosting. This value is supported only at the China site (aliyun.com).
   * *   **VOD**: ApsaraVideo VOD. This value is supported only at the China site (aliyun.com).
   * *   **CR**: Container Registry. This value is supported only at the China site (aliyun.com).
   * *   **ALB**: Application Load Balancer (ALB).
   * *   **APIGateway**: API Gateway.
   * *   **FC**: Function Compute.
   * *   **GA**: Global Accelerator (GA).
   * *   **MSE**: Microservices Engine (MSE).
   * *   **NLB**: Network Load Balancer (NLB).
   * *   **OSS**: Object Storage Service (OSS).
   * *   **SAE**: Serverless App Engine (SAE).
   * *   **TencentCDN**: Tencent Cloud Content Delivery Network (CDN).
   * *   **WAF**: Web Application Firewall (WAF).
   * 
   * @example
   * SLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service provider to which the cloud resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  cloudRegion?: string;
  /**
   * @remarks
   * Indicates whether the cloud resource is the default resource. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 0
   */
  defaultResource?: number;
  /**
   * @remarks
   * The domain name bound to the cloud resource.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled for the cloud resource. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableHttps?: number;
  /**
   * @remarks
   * The time when the cloud resource was created. The time is a timestamp in seconds.
   * 
   * @example
   * 1673423339000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cloud resource was last modified. The time is in the timestamp format.
   * 
   * @example
   * 1681956830000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * 20979
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * cas-cn-m7r1qocw91at
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * lsn-vwdff0q20poq5xazb9@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 8047
   */
  listenerPort?: string;
  /**
   * @remarks
   * The region ID of the cloud resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The other metadata related to the cloud resource.
   * 
   * @example
   * {\\"camera_model\\":\\"GIFSHOW [1267087617][OnePlus
   */
  remark?: string;
  /**
   * @remarks
   * The status of the cloud resource.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether an Alibaba Cloud SSL certificate is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is required only when you deploy certificates to services of multiple clouds.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1666884372152785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certEndTime: 'CertEndTime',
      certId: 'CertId',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      cloudAccessId: 'CloudAccessId',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      domain: 'Domain',
      enableHttps: 'EnableHttps',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      useSsl: 'UseSsl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certEndTime: 'string',
      certId: 'number',
      certName: 'string',
      certStartTime: 'string',
      cloudAccessId: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'number',
      domain: 'string',
      enableHttps: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      listenerId: 'string',
      listenerPort: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      useSsl: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponseBodyCertificateOrderList extends $dara.Model {
  /**
   * @remarks
   * The algorithm. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud order. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 234567
   */
  aliyunOrderId?: number;
  /**
   * @remarks
   * The time at which the order was placed. Unit: milliseconds. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1634283958000
   */
  buyDate?: number;
  /**
   * @remarks
   * The time at which the certificate expires. Unit: milliseconds. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1665819958000
   */
  certEndTime?: number;
  /**
   * @remarks
   * The time at which the certificate starts to take effect. Unit: milliseconds. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1665819958000
   */
  certStartTime?: number;
  /**
   * @remarks
   * The type of the certificate. This parameter is returned only if OrderType is set to CPACK or BUY. Valid values:
   * 
   * *   **DV**: domain validated (DV) certificate
   * *   **EV**: extended validation (EV) certificate
   * *   **OV**: organization validated (OV) certificate **FREE**: free certificate, available only on the China site (aliyun.com)
   * 
   * @example
   * FREE
   */
  certType?: string;
  /**
   * @remarks
   * The ID of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 896521
   */
  certificateId?: number;
  /**
   * @remarks
   * The city in which the organization is located. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The parent domain name of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The domain name. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The total number of domain names that can be bound to the certificate. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1
   */
  domainCount?: number;
  /**
   * @remarks
   * The type of the domain name. This parameter is returned only if OrderType is set to CPACK or BUY. Valid values:
   * 
   * *   **ONE**: single domain name
   * *   **MULTIPLE**: multiple domain names
   * *   **WILDCARD**: single wildcard domain name
   * *   **M_WILDCARD**: multiple wildcard domain names
   * *   **MIX**: hybrid domain name
   * 
   * @example
   * ONE
   */
  domainType?: string;
  /**
   * @remarks
   * The time at which the certificate expires. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 2022-11-17
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the certificate expires. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The fingerprint of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * CC6B3696E7C7CA715BD26E28E45FF3E3DF435C03
   */
  fingerprint?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cas-instanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * The issuer of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * MyIssuer
   */
  issuer?: string;
  /**
   * @remarks
   * The name of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * cert-name
   */
  name?: string;
  /**
   * @remarks
   * The order ID. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 2345687
   */
  orderId?: number;
  /**
   * @remarks
   * The name of the organization that is associated with the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * Alibaba Cloud
   */
  orgName?: string;
  /**
   * @remarks
   * The ID of the third-party certificate authority (CA) order. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * ca-123456
   */
  partnerOrderId?: string;
  /**
   * @remarks
   * The specification ID of the order. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * bykj123456
   */
  productCode?: string;
  /**
   * @remarks
   * The specification name of the order. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * CFCA
   */
  productName?: string;
  /**
   * @remarks
   * The province or autonomous region in which the organization is located. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * Zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The brand of the certificate. Valid values: WoSign, CFCA, DigiCert, and vTrus. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * CFCA
   */
  rootBrand?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate. Multiple domain names are separated by commas (,). This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 040a6e493cffdda6d744acf99b6576cf
   */
  serialNo?: string;
  /**
   * @remarks
   * The SHA-2 value of the certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 56B4DED2243A81DD909D7C39824FFE4DDBD87F91BFA46CD333FF212FE0E7CB11
   */
  sha2?: string;
  /**
   * @remarks
   * The type of the order. This parameter is returned only if OrderType is set to CPACK or BUY. Valid values:
   * 
   * *   **cpack**: virtual resource order
   * *   **buy**: purchase order
   * 
   * @example
   * buy
   */
  sourceType?: string;
  /**
   * @remarks
   * The time at which the certificate starts to take effect. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 2021-11-16
   */
  startDate?: string;
  /**
   * @remarks
   * The certificate status of the order. This parameter is returned only if OrderType is set to CPACK or BUY. Valid values:
   * 
   * *   **PAYED**: pending application
   * *   **CHECKING**: reviewing
   * *   **CHECKED_FAIL**: review failed
   * *   **ISSUED**: issued
   * *   **WILLEXPIRED**: about to expire
   * *   **EXPIRED**: expired
   * *   **NOTACTIVATED**: not activated
   * *   **REVOKED**: revoked
   * 
   * @example
   * PAYED
   */
  status?: string;
  /**
   * @remarks
   * The hosting status of the certificate. This parameter is returned only if OrderType is set to CPACK or BUY. Valid values:
   * 
   * *   **unTrustee**: not hosted
   * *   **trustee**: hosted
   * 
   * @example
   * unTrustee
   */
  trusteeStatus?: string;
  /**
   * @remarks
   * Indicates whether the certificate is an uploaded certificate. This parameter is returned only if OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * false
   */
  upload?: boolean;
  /**
   * @remarks
   * The number of wildcard domain names that can be bound to the certificate. This parameter is returned only if OrderType is set to CPACK or BUY.
   * 
   * @example
   * 0
   */
  wildDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      aliyunOrderId: 'AliyunOrderId',
      buyDate: 'BuyDate',
      certEndTime: 'CertEndTime',
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      certificateId: 'CertificateId',
      city: 'City',
      commonName: 'CommonName',
      country: 'Country',
      domain: 'Domain',
      domainCount: 'DomainCount',
      domainType: 'DomainType',
      endDate: 'EndDate',
      expired: 'Expired',
      fingerprint: 'Fingerprint',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      name: 'Name',
      orderId: 'OrderId',
      orgName: 'OrgName',
      partnerOrderId: 'PartnerOrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      province: 'Province',
      resourceGroupId: 'ResourceGroupId',
      rootBrand: 'RootBrand',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      sourceType: 'SourceType',
      startDate: 'StartDate',
      status: 'Status',
      trusteeStatus: 'TrusteeStatus',
      upload: 'Upload',
      wildDomainCount: 'WildDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      aliyunOrderId: 'number',
      buyDate: 'number',
      certEndTime: 'number',
      certStartTime: 'number',
      certType: 'string',
      certificateId: 'number',
      city: 'string',
      commonName: 'string',
      country: 'string',
      domain: 'string',
      domainCount: 'number',
      domainType: 'string',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      instanceId: 'string',
      issuer: 'string',
      name: 'string',
      orderId: 'number',
      orgName: 'string',
      partnerOrderId: 'string',
      productCode: 'string',
      productName: 'string',
      province: 'string',
      resourceGroupId: 'string',
      rootBrand: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      sourceType: 'string',
      startDate: 'string',
      status: 'string',
      trusteeStatus: 'string',
      upload: 'boolean',
      wildDomainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name bound to the certificate in the worker task.
   * 
   * @example
   * www.example.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The ID of the certificate in the worker task.
   * 
   * @example
   * 12073663
   */
  certId?: number;
  /**
   * @remarks
   * The instance ID of the certificate in the worker task.
   * 
   * @example
   * lsn-jzk2h0xz5dmynuphb8@1883
   */
  certInstanceId?: string;
  /**
   * @remarks
   * The name of the certificate in the worker task.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The cloud service provider to which the cloud resource in the worker task belongs.
   * 
   * >  This parameter is not returned if you deploy certificates to Alibaba Cloud services.
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service to which the cloud resource in the worker task belongs. Valid values:
   * 
   * *   **CDN**: Alibaba Cloud CDN (CDN). This value is supported only at the China site (aliyun.com).
   * *   **SLB**: Classic Load Balancer (CLB). This value is supported only at the China site (aliyun.com).
   * *   **DCDN**: Dynamic Content Delivery Network (DCDN). This value is supported only at the China site (aliyun.com).
   * *   **DDOS**: Anti-DDoS. This value is supported only at the China site (aliyun.com).
   * *   **LIVE**: ApsaraVideo Live. This value is supported only at the China site (aliyun.com).
   * *   **webHosting**: Cloud Web Hosting. This value is supported only at the China site (aliyun.com).
   * *   **VOD**: ApsaraVideo VOD. This value is supported only at the China site (aliyun.com).
   * *   **CR**: Container Registry. This value is supported only at the China site (aliyun.com).
   * *   **ALB**: Application Load Balancer (ALB).
   * *   **APIGateway**: API Gateway.
   * *   **FC**: Function Compute.
   * *   **GA**: Global Accelerator (GA).
   * *   **MSE**: Microservices Engine (MSE).
   * *   **NLB**: Network Load Balancer (NLB).
   * *   **OSS**: Object Storage Service (OSS).
   * *   **SAE**: Serverless App Engine (SAE).
   * *   **TencentCDN**: Tencent Cloud Content Delivery Network (CDN).
   * *   **WAF**: Web Application Firewall (WAF).
   * 
   * @example
   * SLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The original region ID of the cloud resource in the worker task. The value is the region ID defined by the cloud service provider. This parameter is required only when you deploy certificates to services of multiple clouds.
   * 
   * @example
   * cn-hangzhou
   */
  cloudRegion?: string;
  /**
   * @remarks
   * Indicates whether the cloud resource in the worker task is the default resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 0
   */
  defaultResource?: boolean;
  /**
   * @remarks
   * The time when the worker task was created. The time is a timestamp in seconds.
   * 
   * @example
   * 1680228896000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the worker task was last modified. The time is a timestamp in seconds.
   * 
   * @example
   * 1681956830000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the worker task.
   * 
   * @example
   * 22487
   */
  id?: number;
  /**
   * @remarks
   * The ID of the cloud resource in the worker task.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * cas-cn-0pp118nuu40b
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the deployment task to which the worker task belongs.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The listener ID of the cloud resource in the worker task.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * lsn-lhl8y7s1e1ngc3m3zz@81
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the namespace in SAE. This parameter is returned only if you deploy certificates to SAE.
   * 
   * @example
   * 32fed52a-4bf7-44f6-955f-e82ada68ef18
   */
  namespaceId?: string;
  /**
   * @remarks
   * The order ID of the worker task, which is the same as the order ID of the certificate.
   * 
   * >  If the CertId parameter is returned, this parameter is not returned.
   * 
   * @example
   * 9349278
   */
  orderId?: number;
  /**
   * @remarks
   * The listening port of the cloud resource in the worker task.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 4431
   */
  port?: number;
  /**
   * @remarks
   * The region ID of the cloud resource in the worker task.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the certificate that was originally bound to the cloud resource in the worker task.
   * 
   * @example
   * 123
   */
  resourceCertId?: number;
  /**
   * @remarks
   * The domain name that was originally bound to the cloud resource in the worker task.
   * 
   * @example
   * www.example.com
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The ID of the cloud resource in the worker task.
   * 
   * @example
   * 1286999
   */
  resourceId?: number;
  /**
   * @remarks
   * The status of the worker task. Valid values:
   * 
   * *   **editing**
   * *   **pending**
   * *   **scheduling**
   * *   **processing**
   * *   **error**
   * *   **success**
   * *   **rollback**
   * *   **rollback_success**
   * *   **rollback_error**
   * 
   * @example
   * editing
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the worker task belongs.
   * 
   * @example
   * 1666884372152785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certDomain: 'CertDomain',
      certId: 'CertId',
      certInstanceId: 'CertInstanceId',
      certName: 'CertName',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      listenerId: 'ListenerId',
      namespaceId: 'NamespaceId',
      orderId: 'OrderId',
      port: 'Port',
      regionId: 'RegionId',
      resourceCertId: 'ResourceCertId',
      resourceDomain: 'ResourceDomain',
      resourceId: 'ResourceId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomain: 'string',
      certId: 'number',
      certInstanceId: 'string',
      certName: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobId: 'number',
      listenerId: 'string',
      namespaceId: 'string',
      orderId: 'number',
      port: 'number',
      regionId: 'string',
      resourceCertId: 'number',
      resourceDomain: 'string',
      resourceId: 'number',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * account
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag. A maximum of 20 tag values can be entered. If this value needs to be passed in, an empty string can be entered.
   * 
   * A maximum of 128 characters are supported, it cannot start with \\"aliyun\\" or \\"acs:\\", and it cannot contain \\"http://\\" or \\"https://\\".
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCertificateForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCertificateForPackageRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CancelCertificateForPackageRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCertificateForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCertificateForPackageRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CancelOrderRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOrderRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The company name of the certificate application.
   * 
   * >  This parameter is available only when you apply for OV certificates. For more information, see [Manage company profiles](https://help.aliyun.com/document_detail/198289.html). If you want to apply for a DV certificate, you do not need to add a company profile.
   * 
   * If you specify a company name, the information about the company that is configured in the **Information Management** module is used. If you do not specify this parameter, the information about the most recent company that is added to the **Information Management** module is used.
   * 
   * @example
   * A company
   */
  companyName?: string;
  /**
   * @remarks
   * The content of the certificate signing request (CSR) file that is manually generated by using OpenSSL or Keytool for the domain name. The key algorithm in the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography (ECC), and the key length of the RSA algorithm must be greater than or equal to 2,048 characters. For more information about how to create a CSR file, see [Create a CSR file](https://help.aliyun.com/document_detail/313297.html). If you do not specify this parameter, Certificate Management Service automatically creates a CSR file.
   * 
   * A CSR file contains the information about your server and company. When you apply for a certificate, you must submit the CSR file to the CA. The CA signs the CSR file by using the private key of the root certificate and generates a public key file to issue your certificate.
   * 
   * >  The \\*\\*CN\\*\\* field in CSR file specifies the domain name that is bound to the certificate. You must include the field in the parameter value.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The domain name that you want to bind to the certificate. The domain name must meet the following requirements:
   * 
   * *   The domain name must be a single domain name or a wildcard domain name. Example: `*.aliyundoc.com`.
   * *   You can specify multiple domain names. Separate multiple domain names with commas (,). You can specify a maximum of five domain names.
   * *   If you specify multiple domain names, the domain names must be only single domain names or only wildcard domain names. You cannot specify both single domain names and wildcard domain names.
   * 
   * >  If you want to bind multiple domain names to the certificate, you must specify this parameter. You must specify at least one of the Domain parameter and the \\*\\*Csr\\*\\* parameter. If you specify both the Domain parameter and the \\*\\*Csr\\*\\* parameter, the value of the \\*\\*CN\\*\\* field in the \\*\\*Csr\\*\\* parameter is used as the domain name that is bound to the certificate.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The email address of the applicant. After the CA receives your certificate application, the CA sends a verification email to the email address that you specify. You must log on to the mailbox, open the mail, and complete the verification of the domain name ownership based on the steps that are described in the email.
   * 
   * If you do not specify this parameter, the information about the most recent contact that is added to the **Information Management** module is used. For more information about how to add a contact to the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The contact phone number of the applicant. CA staff can call the phone number to confirm the information in your certificate application.
   * 
   * If you do not specify this parameter, the information about the most recent contact that is added to the **Information Management** module is used. For more information about how to add a contact to the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The specifications of the certificate that you want to apply for. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain domain validated (DV) certificate, which is free and valid for 3 months. This value is available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate, which is free and valid for 1 year. This value is available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **symantec-ov-1-personal**: DigiCert single-domain organization validated (OV) certificate.
   * *   **symantec-ov-w-personal**: DigiCert wildcard OV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **geotrust-ov-1-personal**: GeoTrust single-domain OV certificate.
   * *   **geotrust-ov-w-personal**: GeoTrust wildcard OV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * *   **globalsign-ov-1-personal**: GlobalSign single-domain OV certificate.
   * *   **globalsign-ov-w-advanced**: GlobalSign wildcard OV certificate.
   * *   **cfca-ov-1-personal**: China Financial Certification Authority (CFCA) single-domain OV certificate, available only on the China site (aliyun.com).
   * *   **cfca-ev-w-advanced**: CFCA wildcard OV certificate, available only on the China site (aliyun.com).
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateCertificateForPackageRequestRequestTags[];
  /**
   * @remarks
   * The name of the applicant.
   * 
   * If you do not specify this parameter, the information about the most recent contact that is added to the **Information Management** module is used. For more information about how to add a contact to the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The verification method of the domain name ownership. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name. You must have operation permissions on domain name resolution to verify the ownership of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server. You must have administrative rights on the DNS server to verify the ownership of the domain name.
   * 
   * For more information about the verification methods, see [Verify the ownership of a domain name](https://help.aliyun.com/document_detail/48016.html).
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      csr: 'Csr',
      domain: 'Domain',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      tags: 'Tags',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      csr: 'string',
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateForPackageRequestRequestTags },
      username: 'string',
      validateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateForPackageRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order.
   * 
   * >  You can use the ID to query the status of the certificate application order. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 2021010
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5890029B-938A-589E-98B9-3DEC7BA7C400
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

export class CreateCertificateForPackageRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCertificateForPackageRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that you want to bind to the certificate. You can specify only one domain name.
   * 
   * >  The domain name must match the certificate specifications that you specify for the **ProductCode** parameter. If you apply for a single-domain certificate, you must specify a single domain name for this parameter. If you apply for a wildcard certificate, you must specify a wildcard domain name such as `*.aliyundoc.com` for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The contact email address of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The phone number of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The specifications of the certificate. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain DV certificate, which is free and valid for 3 months.
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate, which is free and valid for 1 year. This value is available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreateCertificateRequestRequestTags[];
  /**
   * @remarks
   * The name of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The method to verify the ownership of a domain name. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name. You must have operation permissions on domain name resolution to verify the ownership of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server. You must have administrative rights on the DNS server to verify the ownership of the domain name.
   * 
   * For more information about the verification methods, see [Verify the ownership of a domain name](https://help.aliyun.com/document_detail/48016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      tags: 'Tags',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateRequestRequestTags },
      username: 'string',
      validateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order.
   * 
   * >  You can use the ID to query the status of the certificate application. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 98987582437920968
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

export class CreateCertificateRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCertificateRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR file.\\
   * The key algorithm in the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography (ECC), and the key length of the RSA algorithm must be greater than or equal to 2,048 characters. For more information about how to create a CSR file, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)\\
   * A CSR file contains the information about your server and company. When you apply for a certificate, you must submit the CSR file to the CA. The CA signs the CSR file by using the private key of the root certificate and generates a public key file to issue your certificate.
   * 
   * >  The **CN** field in the CSR file specifies the domain name that is bound to the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The contact email address of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The phone number of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The specifications of the certificate that you want to apply for. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain DV certificate in a three-month free trial, available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate in a one-year free trial, available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateCertificateWithCsrRequestRequestTags[];
  /**
   * @remarks
   * The name of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The method to verify the ownership of a domain name. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name. You must have operation permissions on domain name resolution to verify the ownership of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server. You must have administrative rights on the DNS server to verify the ownership of the domain name.
   * 
   * For more information about the verification methods, see [Verify the ownership of a domain name](https://help.aliyun.com/document_detail/48016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      tags: 'Tags',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateWithCsrRequestRequestTags },
      username: 'string',
      validateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order.
   * 
   * >  You can use the ID to query the status of the certificate application. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 98987582437920968
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

export class CreateCertificateWithCsrRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateWithCsrRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCertificateWithCsrRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, SM2, and ECC. For more information about algorithms, see [Select an SSL certificate](https://help.aliyun.com/document_detail/197871.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * This parameter is required.
   * 
   * @example
   * 123.com
   */
  commonName?: string;
  /**
   * @remarks
   * The name of the company.
   * 
   * @example
   * aly
   */
  corpName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. For example, you can use CN to indicate China and use US to indicate the United States.
   * 
   * This parameter is required.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The department that uses the certificate.
   * 
   * @example
   * IT
   */
  department?: string;
  /**
   * @remarks
   * The key length that is used by the algorithm.
   * 
   * *   The key length for RSA algorithms can be 2,048, 3,072, and 4,096 bits.
   * *   The key length for ECC and SM2 algorithms can be 256 bits.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The city where the company is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  locality?: string;
  /**
   * @remarks
   * The name of the CSR. The name can be up to 50 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * csr-123
   */
  name?: string;
  /**
   * @remarks
   * The province or location where the company is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The secondary domain names. Separate multiple domain names with commas (,). You can use the CSR to apply for a certificate for both the primary and secondary domain names.
   * 
   * @example
   * www.example.com,www.aliyundoc.com
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      corpName: 'CorpName',
      countryCode: 'CountryCode',
      department: 'Department',
      keySize: 'KeySize',
      locality: 'Locality',
      name: 'Name',
      province: 'Province',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      corpName: 'string',
      countryCode: 'string',
      department: 'string',
      keySize: 'number',
      locality: 'string',
      name: 'string',
      province: 'string',
      sans: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The unique identifier of the CSR. You can use this value to obtain the content of the CSR. For more information about the operation that you can call to obtain the content of a CSR, see [GetCsrDetail](https://help.aliyun.com/document_detail/2709720.html).
   * 
   * @example
   * 3365
   */
  csrId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      csrId: 'number',
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

export class CreateCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12342649,12304338,12067351,9957285
   */
  certIds?: string;
  /**
   * @remarks
   * The contact IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  contactIds?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * Valid values:
   * 
   * *   cloud
   * *   user
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6591316,6585549,6190248,5811894,5775176,5772504
   */
  resourceIds?: string;
  /**
   * @remarks
   * The time when the task was scheduled.
   * 
   * @example
   * 1706613560008
   */
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobType: 'JobType',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobType: 'string',
      name: 'string',
      resourceIds: 'string',
      scheduleTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
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

export class CreateDeploymentJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   **RSAES_OAEP_SHA_1**
   * *   **RSAES_OAEP_SHA_256**
   * *   **SM2PKE**
   * 
   * This parameter is required.
   * 
   * @example
   * RSAESOAEPSHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to query the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data that you want to decrypt. The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: The returned result is raw data encoded in UTF-8.
   * *   Base64: The returned result is Base64-encoded data. This is the default value.
   * 
   * @example
   * Base64
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      ciphertextBlob: 'string',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data after decryption.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      plaintext: 'string',
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

export class DecryptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DecryptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order that you want to delete.
   * 
   * >  After you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html), [CreateCertificateRequest](https://help.aliyun.com/document_detail/455292.html), or [CreateCertificateWithCsrRequest](https://help.aliyun.com/document_detail/455801.html) operation to submit a certificate application, you can obtain the ID of the certificate application order from the **OrderId** response parameter. You can also call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteCertificateRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCertificateRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * 3013
   */
  csrId?: number;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3F1FA43-1C26-50A2-8F0F-7A03851DBB46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteDeploymentJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeploymentJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePCACertRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/452331.html) operation to query the unique identifiers of certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * ccaf0c629c2be1e2ab
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePCACertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeletePCACertResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePCACertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePCACertResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7562353
   */
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3E50D480-9765-5CFD-9650-9BACCECA5135
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteUserCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkerResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the worker for the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      workerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkerResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA69E364-5CBB-50E8-BF09-E8CAA396A4F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteWorkerResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkerResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order that you want to query.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate in the PEM format. For more information about the PEM format and how to convert certificate formats, see [What formats are used for mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html)
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **certificate**. The value certificate indicates that the certificate is issued.
   * 
   * @example
   * ——BEGIN CERTIFICATE—— …… ——END CERTIFICATE——
   */
  certificate?: string;
  /**
   * @remarks
   * The content that you need to write to the newly created file when you use the file verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * http://example.com/.well-known/pki-validation/fileauth.txt
   */
  content?: string;
  /**
   * @remarks
   * The domain name to be verified when you use the file verification method. You must connect to the DNS server of the domain name and create a file on the server. The file is specified by the **Uri** parameter.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The private key of the certificate in the PEM format. For more information about the PEM format and how to convert certificate formats, see [What formats are used for mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html)
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **certificate**. The value certificate indicates that the certificate is issued.
   * 
   * @example
   * ——BEGIN RSA PRIVATE KEY—— …… ——END RSA PRIVATE KEY——
   */
  privateKey?: string;
  /**
   * @remarks
   * The DNS record that you need to manage when you use the DNS verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value DNS indicates that the DNS verification method is used.
   * 
   * @example
   * _dnsauth
   */
  recordDomain?: string;
  /**
   * @remarks
   * The type of the DNS record that you need to add when you use the DNS verification method. Valid values:
   * 
   * *   **TXT**
   * *   **CNAME**
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete.
   * 
   * @example
   * TXT
   */
  recordType?: string;
  /**
   * @remarks
   * You need to add a TXT record to the DNS records only when you use the DNS verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value DNS indicates that the DNS verification method is used.
   * 
   * @example
   * 20200420000000223erigacv46uhaubchcm0o7spxi7i2isvjq59mlx9lucnkqcy
   */
  recordValue?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the certificate application order. Valid values:
   * 
   * *   **domain_verify**: **pending review**, which indicates that you have not completed the verification of the domain name ownership after you submit the certificate application.
   *      >After you submit a certificate application, you must manually complete the verification of the domain name ownership. The CA reviews the certificate application only after the verification is complete. If you have not completed the verification of the domain name ownership, you can complete the verification based on the data returned by this operation.
   * 
   * *   **process**: **being reviewed**, which indicates that the certificate application is being reviewed by the CA.
   * 
   * *   **verify_fail**: **review failed**, which indicates that the certificate application failed to be reviewed.
   *     >  If a certificate application fails to be reviewed, the information that you specified in the certificate application may be incorrect. We recommend that you call the [DeleteCertificateRequest](https://help.aliyun.com/document_detail/164109.html) operation to delete the certificate application order and resubmit a certificate application. After the order is deleted, the quota that is consumed for the order is released.
   * 
   * *   **certificate**: **issued**, which indicates that the certificate is issued.
   * 
   * *   **payed**: **pending application**, which indicates that you have not submitted a certificate application.
   * 
   * *   **unknow**: The status is **unknown**.
   * 
   * @example
   * domain_verify
   */
  type?: string;
  /**
   * @remarks
   * The file that you need to create on the DNS server when you use the file verification method. **The value of this parameter contains the file path and file name.**
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * /.well-known/pki-validation/fileauth.txt
   */
  uri?: string;
  /**
   * @remarks
   * The verification method of the domain name ownership. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify**. The value domain_verify indicates that the verification of the domain name ownership is not complete.
   * 
   * @example
   * FILE
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      content: 'Content',
      domain: 'Domain',
      privateKey: 'PrivateKey',
      recordDomain: 'RecordDomain',
      recordType: 'RecordType',
      recordValue: 'RecordValue',
      requestId: 'RequestId',
      type: 'Type',
      uri: 'Uri',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      content: 'string',
      domain: 'string',
      privateKey: 'string',
      recordDomain: 'string',
      recordType: 'string',
      recordValue: 'string',
      requestId: 'string',
      type: 'string',
      uri: 'string',
      validateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertificateStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertificateStateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey secret used to access cloud resources.
   * 
   * >  You can call the [ListCloudAccess](https://help.aliyun.com/document_detail/2712219.html) operation to obtain the ID.
   * 
   * @example
   * AKID9*******XX
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeCloudResourceStatusResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCloudResourceStatusResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudResourceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment job. The **ID** of the job is returned after you call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  casContacts?: DescribeDeploymentJobResponseBodyCasContacts[];
  /**
   * @remarks
   * The domain names bound to the certificate of the deployment task.
   * 
   * @example
   * example.aliyundoc.com,demo.aliyundoc.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **buy**: purchased certificate
   * *   **free**: free certificate available only on the China site (aliyun.com)
   * 
   * @example
   * buy
   */
  certType?: string;
  /**
   * @remarks
   * The configurations of the deployment task.
   * 
   * @example
   * {\\"shareCertIds\\":[],\\"certIds\\":[12342649,12304338,12067351,9957285]}
   */
  config?: string;
  /**
   * @remarks
   * Indicates whether the deployment job was deleted. Valid values:
   * 
   * *   **0**: not deleted
   * *   **1**: deleted
   * 
   * @example
   * 1
   */
  del?: number;
  /**
   * @remarks
   * The end time of the deployment job. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the deployment job was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment job was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the deployment job.
   * 
   * @example
   * 8888
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the deployment task.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the deployment job. Valid values:
   * 
   * *   **cloud**: multi-cloud deployment job.
   * *   **trustee**: hosted deployment job available only on the China site (aliyun.com).
   * *   **user**: cloud service deployment job. The cloud server is not included.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * @example
   * auto-test-AXX
   */
  name?: string;
  /**
   * @remarks
   * The cloud services included in the deployment task.
   * 
   * @example
   * CDN
   */
  productName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the deployment job includes the rollback worker. For example, if a cloud service in a deployment job has been rolled back, **1** is returned. Valid values:
   * 
   * *   **0**: The rollback worker is not included.
   * *   **1**: The rollback worker is included.
   * 
   * @example
   * 1
   */
  rollback?: number;
  /**
   * @remarks
   * The time when the deployment job was scheduled. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1678083209335
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the deployment job. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deployment job. Valid values:
   * 
   * *   **pending**
   * *   **editing**
   * *   **scheduling**
   * *   **processing**
   * *   **error**
   * *   **success**
   * 
   * @example
   * editing
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in which the deployment job is created.
   * 
   * @example
   * 166688437XXXX785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      casContacts: 'CasContacts',
      certDomain: 'CertDomain',
      certType: 'CertType',
      config: 'Config',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      requestId: 'RequestId',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casContacts: { 'type': 'array', 'itemType': DescribeDeploymentJobResponseBodyCasContacts },
      certDomain: 'string',
      certType: 'string',
      config: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      requestId: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.casContacts)) {
      $dara.Model.validateArray(this.casContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeploymentJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **JobId** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of purchased resources.
   * 
   * @example
   * 500
   */
  buyCount?: number;
  /**
   * @remarks
   * The number of certificates involved in the deployment task.
   * 
   * @example
   * 20
   */
  certCount?: number;
  /**
   * @remarks
   * The number of resources consumed by worker tasks.
   * 
   * @example
   * 20
   */
  costCount?: number;
  /**
   * @remarks
   * The number of failed worker tasks, excluding rollback tasks.
   * 
   * @example
   * 20
   */
  failedCount?: number;
  /**
   * @remarks
   * The total number of worker tasks that match the certificate.
   * 
   * @example
   * 20
   */
  matchWorkerCount?: number;
  /**
   * @remarks
   * The number of cloud resources to which certificates are deployed in the deployment task.
   */
  productWorkerCount?: DescribeDeploymentJobStatusResponseBodyProductWorkerCount[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 4127
   */
  resourceCount?: number;
  /**
   * @remarks
   * The number of worker tasks that are rolled backed.
   * 
   * @example
   * 20
   */
  rollbackCount?: number;
  /**
   * @remarks
   * The number of worker tasks that failed to be rolled back.
   * 
   * @example
   * 20
   */
  rollbackFailedCount?: number;
  /**
   * @remarks
   * The number of worker tasks that are successfully rolled back.
   * 
   * @example
   * 20
   */
  rollbackSuccessCount?: number;
  /**
   * @remarks
   * The number of successful worker tasks, excluding rollback tasks.
   * 
   * @example
   * 20
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of used resources.
   * 
   * @example
   * 300
   */
  useCount?: number;
  /**
   * @remarks
   * The total number of resources to which certificate are deployed in the current cloud service. The value indicates the total number of worker tasks.
   * 
   * @example
   * 20
   */
  workerCount?: number;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      certCount: 'CertCount',
      costCount: 'CostCount',
      failedCount: 'FailedCount',
      matchWorkerCount: 'MatchWorkerCount',
      productWorkerCount: 'ProductWorkerCount',
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
      rollbackCount: 'RollbackCount',
      rollbackFailedCount: 'RollbackFailedCount',
      rollbackSuccessCount: 'RollbackSuccessCount',
      successCount: 'SuccessCount',
      useCount: 'UseCount',
      workerCount: 'WorkerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'number',
      certCount: 'number',
      costCount: 'number',
      failedCount: 'number',
      matchWorkerCount: 'number',
      productWorkerCount: { 'type': 'array', 'itemType': DescribeDeploymentJobStatusResponseBodyProductWorkerCount },
      requestId: 'string',
      resourceCount: 'number',
      rollbackCount: 'number',
      rollbackFailedCount: 'number',
      rollbackSuccessCount: 'number',
      successCount: 'number',
      useCount: 'number',
      workerCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productWorkerCount)) {
      $dara.Model.validateArray(this.productWorkerCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeploymentJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeploymentJobStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of the certificate resource plan. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain domain validated (DV) certificate in a three-month free trial, available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate in a one-year free trial, available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **symantec-ov-1-personal**: DigiCert single-domain organization validated (OV) certificate.
   * *   **symantec-ov-w-personal**: DigiCert wildcard OV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **geotrust-ov-1-personal**: GeoTrust single-domain OV certificate.
   * *   **geotrust-ov-w-personal**: GeoTrust wildcard OV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * *   **globalsign-ov-1-personal**: GlobalSign single-domain OV certificate.
   * *   **globalsign-ov-w-advanced**: GlobalSign wildcard OV certificate.
   * *   **cfca-ov-1-personal**: China Financial Certification Authority (CFCA) single-domain OV certificate, available only on the China site (aliyun.com).
   * *   **cfca-ev-w-advanced**: CFCA wildcard OV certificate, available only on the China site (aliyun.com).
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of issued certificates of the specified specifications.
   * 
   * @example
   * 1
   */
  issuedCount?: number;
  /**
   * @remarks
   * The specifications of the certificate resource plan. Valid values:
   * 
   * *   **digicert-free-1-free**: DigiCert single-domain DV certificate in a three-month free trial, available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate in a one-year free trial, available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **symantec-ov-1-personal**: DigiCert single-domain OV certificate.
   * *   **symantec-ov-w-personal**: DigiCert wildcard OV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **geotrust-ov-1-personal**: GeoTrust single-domain OV certificate.
   * *   **geotrust-ov-w-personal**: GeoTrust wildcard OV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * *   **globalsign-ov-1-personal**: GlobalSign single-domain OV certificate.
   * *   **globalsign-ov-w-advanced**: GlobalSign wildcard OV certificate.
   * *   **cfca-ov-1-personal**: CFCA single-domain OV certificate, available only on the China site (aliyun.com).
   * *   **cfca-ev-w-advanced**: CFCA wildcard OV certificate, available only on the China site (aliyun.com).
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 10CFA380-1C58-45C7-8075-06215F3DB681
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of purchased certificate resource plans of the specified specifications.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of certificate applications that you submitted for certificates of the specified specifications.
   * 
   * > : A successful call of the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/204087.html), [CreateCertificateRequest](https://help.aliyun.com/document_detail/164105.html), or [CreateCertificateWithCsrRequest](https://help.aliyun.com/document_detail/178732.html) operation is counted as one a certificate application, regardless of whether the certificate is issued.
   * 
   * @example
   * 2
   */
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      issuedCount: 'IssuedCount',
      productCode: 'ProductCode',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuedCount: 'number',
      productCode: 'string',
      requestId: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackageStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePackageStateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   **RSAES_OAEP_SHA_1**
   * *   **RSAES_OAEP_SHA_256**
   * *   **SM2PKE**
   * 
   * This parameter is required.
   * 
   * @example
   * RSAESOAEPSHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: The value of the Plaintext parameter is directly encrypted. This is the default value.
   * *   Base64: The value of the Plaintext parameter is Base64-encoded data. The data is decoded and then encrypted.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The data that you want to encrypt. The value of this parameter can be raw data or Base64-encoded data. For more information, see the description of the MessageType parameter. For example, if the hexadecimal data that you want to encrypt is `[0x31, 0x32, 0x33, 0x34]`, the Base64-encoded data is MTIzNA==. The size of data that can be encrypted varies based on the encryption algorithm that you use. The following list describes the relationship between the encryption algorithms and data sizes:
   * 
   * *   **RSAES_OAEP_SHA_1**: 214 bytes
   * *   **RSAES_OAEP_SHA_256**: 190 bytes
   * *   **SM2PKE**: 6,047 bytes
   * 
   * This parameter is required.
   * 
   * @example
   * 1234***
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      messageType: 'MessageType',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      messageType: 'string',
      plaintext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data after encryption. The value is encoded in Base64.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      ciphertextBlob: 'string',
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

export class EncryptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertWarehouseQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total quota for certificate repositories, including the free quota and purchased quota.
   * 
   * @example
   * 5000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 1000
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalQuota: 'TotalQuota',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalQuota: 'number',
      useCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertWarehouseQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCertWarehouseQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCertWarehouseQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCsrDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * 3924
   */
  csrId?: number;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCsrDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The private key. Specify a Base64-encoded string.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----…… -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08F45EA0-66A7-4504-9B31-3589F5CE308D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      privateKey: 'string',
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

export class GetCsrDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCsrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCsrDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter return results. Valid values: true and false. Default value: false. **true** specifies that the Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey parameters are not returned. **false** specifies that the parameters are returned.
   * 
   * @example
   * false
   */
  certFilter?: boolean;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6055048
   */
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certFilter: 'CertFilter',
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFilter: 'boolean',
      certId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the certificate was purchased from Alibaba Cloud. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  buyInAliyun?: boolean;
  /**
   * @remarks
   * The content of the certificate if the certificate does not use an SM algorithm. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * ---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The certificate chain.
   */
  certChain?: GetUserCertificateDetailResponseBodyCertChain[];
  /**
   * @remarks
   * The certificate identifier. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of CertIdentifier is 123-cn-hangzhou.
   * 
   * @example
   * 10741304-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The city of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The primary domain name that is bound to the certificate.
   * 
   * @example
   * *.com
   */
  common?: string;
  /**
   * @remarks
   * The country or region of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the encryption certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCA***
   * -----END CERTIFICATE-----
   */
  encryptCert?: string;
  /**
   * @remarks
   * The private key of the encryption certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEI****
   * -----END EC PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 2023-10-25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the certificate has expired. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The fingerprint of the certificate.
   * 
   * @example
   * 1D7801BBE772D5DE55CBF1F88AEB41A42402DA07
   */
  fingerprint?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 121345
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * @example
   * cas-upload-50yf1q
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The private key of the certificate if the certificate does not use an SM algorithm. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * cert_name
   */
  name?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 17322613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 17312613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456
   */
  orderId?: number;
  /**
   * @remarks
   * The name of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * Alibaba
   */
  orgName?: string;
  /**
   * @remarks
   * The province of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   * 
   * @example
   * *.com
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 06ea4879591ddf84e6c8b6ba43607ccf
   */
  serialNo?: string;
  /**
   * @remarks
   * The SHA-2 value of the certificate.
   * 
   * @example
   * 840707695D5EE41323102DDC2CB4924AA561012FBDC4E1A6324147119ED3C339
   */
  sha2?: string;
  /**
   * @remarks
   * The content of the signing certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  signCert?: string;
  /**
   * @remarks
   * The private key of the signing certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEILR****
   * -----END EC PRIVATE KEY-----
   */
  signPrivateKey?: string;
  /**
   * @remarks
   * The issuance date of the certificate.
   * 
   * @example
   * 2018-07-13
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      buyInAliyun: 'BuyInAliyun',
      cert: 'Cert',
      certChain: 'CertChain',
      certIdentifier: 'CertIdentifier',
      city: 'City',
      common: 'Common',
      country: 'Country',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      endDate: 'EndDate',
      expired: 'Expired',
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      key: 'Key',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      orderId: 'OrderId',
      orgName: 'OrgName',
      province: 'Province',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      buyInAliyun: 'boolean',
      cert: 'string',
      certChain: { 'type': 'array', 'itemType': GetUserCertificateDetailResponseBodyCertChain },
      certIdentifier: 'string',
      city: 'string',
      common: 'string',
      country: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      id: 'number',
      instanceId: 'string',
      issuer: 'string',
      key: 'string',
      name: 'string',
      notAfter: 'number',
      notBefore: 'number',
      orderId: 'number',
      orgName: 'string',
      province: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
      startDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certChain)) {
      $dara.Model.validateArray(this.certChain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserCertificateDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertRequest extends $dara.Model {
  /**
   * @remarks
   * 证书的类型 。取值：
   * 
   * - **CA**：表示CA证书。
   * - **CERT**：表示签发的证书。
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword for the query. You can enter a name, domain name, or Subject Alternative Name (SAN) extension. Fuzzy match is supported.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **aliyun**: Alibaba Cloud certificate
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the certificate repository. You can call the ListCertWarehouse API operation to query the IDs of certificate repositories.
   * 
   * @example
   * 12
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
      sourceType: 'SourceType',
      status: 'Status',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
      sourceType: 'string',
      status: 'string',
      warehouseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the certificates.
   */
  certList?: ListCertResponseBodyCertList[];
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': ListCertResponseBodyCertList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCertResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the certificate application repository.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the certificate application repository. Fuzzy match is supported.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The type of the certificate application repository. Valid values:
   * 
   * *   **ssl**: certificate application repository of SSL certificates
   * *   **uploadPCA**: certificate application repository of uploaded private certificates
   * *   **free**: certificate application repository of free certificates, available only on the China site (aliyun.com)
   * *   **aliyunPCA**: certificate application repository of private certificates purchased from Alibaba Cloud Private Certificate Authority (PCA), available only on the China site (aliyun.com)
   * *   **disable**: disabled certificate application repository
   * 
   * @example
   * aliyunPCA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      name: 'Name',
      showSize: 'ShowSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      name: 'string',
      showSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate application repositories.
   */
  certWarehouseList?: ListCertWarehouseResponseBodyCertWarehouseList[];
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certWarehouseList: 'CertWarehouseList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certWarehouseList: { 'type': 'array', 'itemType': ListCertWarehouseResponseBodyCertWarehouseList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certWarehouseList)) {
      $dara.Model.validateArray(this.certWarehouseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCertWarehouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCertWarehouseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The AccessKey secret used to access the cloud service.
   * 
   * @example
   * 276
   */
  secretId?: string;
  /**
   * @remarks
   * The number of certificates per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      currentPage: 'CurrentPage',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      currentPage: 'number',
      secretId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the AccessKey pairs.
   */
  cloudAccessList?: ListCloudAccessResponseBodyCloudAccessList[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3F1FA43-1C26-50A2-8F0F-7A03851DBB46
   */
  requestId?: string;
  /**
   * @remarks
   * The number of revoked certificates per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccessList: 'CloudAccessList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccessList: { 'type': 'array', 'itemType': ListCloudAccessResponseBodyCloudAccessList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAccessList)) {
      $dara.Model.validateArray(this.cloudAccessList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCloudAccessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate IDs.
   */
  certIds?: number[];
  /**
   * @remarks
   * The cloud service provider.
   * 
   * Valid values:
   * 
   * *   Tencent
   * *   Huawei
   * *   Aws
   * *   aliyun
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * Valid values when CloudName is set to aliyun:
   * 
   * *   SLB: Classic Load Balancer (CLB). This value is available only on the China site (aliyun.com).
   * *   LIVE: ApsaraVideo Live. This value is available only on the China site (aliyun.com).
   * *   webHosting: Cloud Web Hosting. This value is available only on the China site (aliyun.com).
   * *   VOD: ApsaraVideo VOD. This value is available only on the China site (aliyun.com).
   * *   CR: Container Registry. This value is available only on the China site (aliyun.com).
   * *   DCDN: Dynamic Content Delivery Network (DCDN).
   * *   DDOS: Anti-DDoS.
   * *   CDN: Alibaba Cloud CDN (CDN).
   * *   ALB: Application Load Balancer (ALB).
   * *   APIGateway: API Gateway.
   * *   FC: Function Compute.
   * *   GA: Global Accelerator (GA).
   * *   MSE: Microservices Engine (MSE).
   * *   NLB: Network Load Balancer (NLB).
   * *   OSS: Object Storage Service (OSS).
   * *   SAE: Serverless App Engine (SAE).
   * *   WAF: Web Application Firewall (WAF).
   * 
   * Valid values when CloudName is set to Tencent:
   * 
   * *   TencentCDN: Content Delivery Network (CDN).
   * *   TencentCLB: CLB.
   * *   TencentWAF: WAF.
   * 
   * Valid value when CloudName is set to Huawei:
   * 
   * *   HuaweiCDN: CDN.
   * 
   * Valid values when CloudName is set to Aws:
   * 
   * *   AwsCloudFront: Amazon CloudFront.
   * *   AwsCLB: CLB.
   * *   AwsALB: ALB.
   * *   AwsNLB: NLB.
   * 
   * @example
   * SLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword of the domain name or instance ID bound to the cloud resource.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * @example
   * 21
   */
  secretId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: { 'type': 'array', 'itemType': 'number' },
      cloudName: 'string',
      cloudProduct: 'string',
      currentPage: 'number',
      keyword: 'string',
      secretId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certIds)) {
      $dara.Model.validateArray(this.certIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate IDs.
   */
  certIdsShrink?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * Valid values:
   * 
   * *   Tencent
   * *   Huawei
   * *   Aws
   * *   aliyun
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * Valid values when CloudName is set to aliyun:
   * 
   * *   SLB: Classic Load Balancer (CLB). This value is available only on the China site (aliyun.com).
   * *   LIVE: ApsaraVideo Live. This value is available only on the China site (aliyun.com).
   * *   webHosting: Cloud Web Hosting. This value is available only on the China site (aliyun.com).
   * *   VOD: ApsaraVideo VOD. This value is available only on the China site (aliyun.com).
   * *   CR: Container Registry. This value is available only on the China site (aliyun.com).
   * *   DCDN: Dynamic Content Delivery Network (DCDN).
   * *   DDOS: Anti-DDoS.
   * *   CDN: Alibaba Cloud CDN (CDN).
   * *   ALB: Application Load Balancer (ALB).
   * *   APIGateway: API Gateway.
   * *   FC: Function Compute.
   * *   GA: Global Accelerator (GA).
   * *   MSE: Microservices Engine (MSE).
   * *   NLB: Network Load Balancer (NLB).
   * *   OSS: Object Storage Service (OSS).
   * *   SAE: Serverless App Engine (SAE).
   * *   WAF: Web Application Firewall (WAF).
   * 
   * Valid values when CloudName is set to Tencent:
   * 
   * *   TencentCDN: Content Delivery Network (CDN).
   * *   TencentCLB: CLB.
   * *   TencentWAF: WAF.
   * 
   * Valid value when CloudName is set to Huawei:
   * 
   * *   HuaweiCDN: CDN.
   * 
   * Valid values when CloudName is set to Aws:
   * 
   * *   AwsCloudFront: Amazon CloudFront.
   * *   AwsCLB: CLB.
   * *   AwsALB: ALB.
   * *   AwsNLB: NLB.
   * 
   * @example
   * SLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword of the domain name or instance ID bound to the cloud resource.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * @example
   * 21
   */
  secretId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      certIdsShrink: 'CertIds',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdsShrink: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      currentPage: 'number',
      keyword: 'string',
      secretId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: ListCloudResourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 440
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListCloudResourcesResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCloudResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword used in the query. For example, you can specify a keyword in names, email addresses, and mobile phone numbers.
   * 
   * @example
   * 186
   */
  keyword?: string;
  /**
   * @remarks
   * The number of contacts per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The contacts.
   */
  contactList?: ListContactResponseBodyContactList[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword used in the fuzzy search.
   * 
   * @example
   * 186
   */
  keyword?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of certificates per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contactList: 'ContactList',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactList: { 'type': 'array', 'itemType': ListContactResponseBodyContactList },
      currentPage: 'number',
      keyword: 'string',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactList)) {
      $dara.Model.validateArray(this.contactList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, ECC, and SM2.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CSRs.
   */
  csrList?: ListCsrResponseBodyCsrList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E865F6AD-0294-4A24-A58B-DAC6BE2BDD20
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      csrList: 'CsrList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrList: { 'type': 'array', 'itemType': ListCsrResponseBodyCsrList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.csrList)) {
      $dara.Model.validateArray(this.csrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the deployment task.
   * 
   * Valid values:
   * 
   * *   cloud: multi-cloud deployment task.
   * *   user: cloud service deployment task. This type of task does not support Elastic Compute Service (ECS) instances.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The number of certificates per page. Default value: **50**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The status of the deployment task.
   * 
   * Valid values:
   * 
   * *   success
   * *   pending
   * *   scheduling
   * *   processing
   * *   error
   * *   editing
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobType: 'JobType',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobType: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: ListDeploymentJobResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of deployment tasks per page. Default value: **50**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of deployment tasks returned.
   * 
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListDeploymentJobResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **JobId** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDeploymentJobCertResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDeploymentJobCertResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobCertResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDeploymentJobResourceResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDeploymentJobResourceResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The domain name that is bound or the ID of the resource. Fuzzy match is supported.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The type of the order. Default value: **CPACK**. Valid values:
   * 
   * *   **CPACK**: virtual resource order. If you set OrderType to CPACK, only the information about orders that are generated to consume the certificate quota is returned.
   * *   **BUY**: purchase order. If you set OrderType to BUY, only the information about purchase orders is returned. In most cases, this type of order can be ignored.
   * *   **UPLOAD**: uploaded certificate. If you set OrderType to UPLOAD, only uploaded certificates are returned.
   * *   **CERT**: certificate. If you set OrderType to CERT, both issued certificates and uploaded certificates are returned.
   * 
   * @example
   * CPACK
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation to obtain the ID.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The certificate status of the order. Valid values:
   * 
   * *   **PAYED**: pending application. You can set Status to PAYED only if you set OrderType to CPACK or BUY.
   * *   **CHECKING**: validating. You can set Status to CHECKING only if you set OrderType to CPACK or BUY.
   * *   **CHECKED_FAIL**: validation failed. You can set Status to CHECKED_FAIL only if you set OrderType to CPACK or BUY.
   * *   **ISSUED**: issued.
   * *   **WILLEXPIRED**: about to expire.
   * *   **EXPIRED**: expired.
   * *   **NOTACTIVATED**: not activated. You can set Status to NOTACTIVATED only if you set OrderType to CPACK or BUY.
   * *   **REVOKED**: revoked. You can set Status to REVOKED only if you set OrderType to CPACK or BUY.
   * 
   * If you set OrderType to CERT or UPLOAD and Status is left empty, valid certificates are returned by default, including issued certificates and certificates that are about to expire. If you set OrderType to CPACK or BUY and Status is left empty, all orders are returned by default.
   * 
   * @example
   * ISSUED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      orderType: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificates and orders.
   */
  certificateOrderList?: ListUserCertificateOrderResponseBodyCertificateOrderList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateOrderList: 'CertificateOrderList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateOrderList: { 'type': 'array', 'itemType': ListUserCertificateOrderResponseBodyCertificateOrderList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificateOrderList)) {
      $dara.Model.validateArray(this.certificateOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserCertificateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserCertificateOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service in the deployment task.
   * 
   * @example
   * NLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **ID** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The status of the worker task.
   * 
   * Valid values:
   * 
   * *   rollback
   * *   rollback_error
   * *   success
   * *   rollback_success
   * *   pending
   * *   scheduling
   * *   processing
   * *   error
   * *   editing
   * 
   * @example
   * editing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      jobId: 'JobId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProduct: 'string',
      currentPage: 'number',
      jobId: 'number',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListWorkerResourceResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E50D480-9765-5CFD-9650-9BACCECA5135
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **50**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListWorkerResourceResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkerResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the organization to which the owner of the certificate belongs. Valid values: ap-southeast-1 and cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmykgxu5d46ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cas-cn-4591d3xa****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.\\
   * Default value: **instance**
   * 
   * Valid values:
   * 
   * *   instance: certificate order
   * *   Certificate: certificate
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BCD2F6C-7A9D-47C1-8588-2CC6A4E0BE5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class MoveResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate signing request (CSR) file that is manually generated for the domain name by using OpenSSL or Keytool. The key algorithm in the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography (ECC), and the key length of the RSA algorithm must be greater than or equal to 2,048 characters. For more information about how to create a CSR file, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)
   * 
   * If you do not specify this parameter, Certificate Management Service automatically generates a CSR file for the domain name in the certificate application order that you want to renew.
   * 
   * A CSR file contains the information about your server and company. When you apply for a certificate, you must submit the CSR file to the CA. The CA signs the CSR file by using the private key of the root certificate and generates a public key file to issue your certificate.
   * 
   * >  The **CN** field in the CSR file specifies the domain name that is bound to the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- MIIC1TCCAb0CAQAwgY8xCzAJBgNVBAYTAkNOMRIwEAYDVQQIDAlHdWFuZ3pob3Ux ETAPBgNVBAcMCFNoZW56aGVuMQ8wDQYDVQQKDAZDaGFjdW8xEDAOBgNVBAsMB0lU IERlcHQxFzAVBgNVBAMMDnd3dy5jaGFjdW8ubmV0MR0wGwYJKoZIhvcNAQkBFg44 MjkyNjY5QHFxLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALo7 atRvQf9tKo1NJ/MQqzHvIjHNhU+0MMerDq+tRlJ+a7Ro1r6IWNF5MB0Z****** -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the certificate application order that you want to renew.
   * 
   * >  After you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html), [CreateCertificateRequest](https://help.aliyun.com/document_detail/455292.html), or [CreateCertificateWithCsrRequest](https://help.aliyun.com/document_detail/455801.html) operation to submit a certificate application, you can obtain the ID of the certificate application order from the **OrderId** response parameter. You can also call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: RenewCertificateOrderForPackageRequestRequestTags[];
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      orderId: 'OrderId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      orderId: 'number',
      tags: { 'type': 'array', 'itemType': RenewCertificateOrderForPackageRequestRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order that is renewed.
   * 
   * >  You can use the ID to query the status of the certificate application order. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 323451222
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

export class RenewCertificateOrderForPackageRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewCertificateOrderForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewCertificateOrderForPackageRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * ccaf0c629c2be1e2abb63bb76b
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data to sign. The value must be encoded in Base64.\\
   * For example, if the hexadecimal data that you want to sign is [0x31, 0x32, 0x33, 0x34], set the parameter to the Base64-encoded value MTIzNA==. If you set MessageType to RAW, the size of the data must be less than 4 KB. If the size of the data is greater than 4 KB, you can set MessageType to DIGEST and set Message to the digest of the data. The digest is a hash value. You can compute the digest of the data on an on-premises machine. The certificate application repository uses the digest that you compute in your own certificate application system. The message digest algorithm that you use must match the specified signature algorithm. The following items describe the details:
   * 
   * *   If the signature algorithm is SHA256withRSA, SHA256withRSA/PSS, or SHA256withECDSA, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM3withSM2, the message digest algorithm must be SM3.
   * 
   * This parameter is required.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: the raw data. This is the default value.
   * *   DIGEST: the message digest (hash value) of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   SHA256withRSA
   * *   SHA256withRSA/PSS
   * *   SHA256withECDSA
   * *   SM3withSM2
   * 
   * This parameter is required.
   * 
   * @example
   * SHA256withRSA
   */
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      message: 'string',
      messageType: 'string',
      signingAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1ed33293-2e48-6b14-861e-538e28e408eb
   */
  requestId?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * eyaC0w3ROK5b3QcHmUtAhMY/sQjKu2t3uBfnf6J/gn7JfZtyxwcCUjzXbw5jmqJQRbj1te670Bshg9kUdanKhtHFhJjU5jX+ZMMBr6pH0gqQDJxR0K0yHXRc0Q5OQoUZ6BfpbI4Wt4jJvJSdCstz1vSg12CfEHS8Kd5qfhItK7Y=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * 5209
   */
  csrId?: number;
  /**
   * @remarks
   * The private key content of the certificate in the PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Separate multiple certificate IDs with commas (,). You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID of a certificate from the **CertificateId** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  certIds?: string;
  /**
   * @remarks
   * The ID of the contact. Separate multiple contact IDs with commas (,). You can call the [ListContact](https://help.aliyun.com/document_detail/2712221.html) operation to obtain the ID of a contact from the **ContactId** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  contactIds?: string;
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the JobId parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * @example
   * cert-1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cloud resource. Separate multiple resource IDs with commas (,). You can call the [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html) operation to obtain the ID of a cloud resource from the **Id** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  resourceIds?: string;
  /**
   * @remarks
   * The time when the task starts. The value is a UNIX timestamp. If you do not specify this parameter, the system immediately starts the task after it is created.
   * 
   * @example
   * 1606482979000
   */
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobId: 'JobId',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobId: 'number',
      name: 'string',
      resourceIds: 'string',
      scheduleTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateDeploymentJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeploymentJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The desired status.
   * 
   * Valid values:
   * 
   * *   pending
   * *   scheduling
   * *   editing
   * 
   * This parameter is required.
   * 
   * @example
   * editing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * []
   */
  data?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA69E364-5CBB-50E8-BF09-E8CAA396A4F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

export class UpdateDeploymentJobStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeploymentJobStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResourceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **JobId** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The desired status.
   * 
   * Valid values:
   * 
   * *   rollback
   * 
   * This parameter is required.
   * 
   * @example
   * rollback
   */
  status?: string;
  /**
   * @remarks
   * The ID of the worker task. You can call the [ListWorkerResource](https://help.aliyun.com/document_detail/2712224.html) operation to obtain the ID of a worker task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
      workerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResourceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * []
   */
  data?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

export class UpdateWorkerResourceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkerResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkerResourceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The private key content of the certificate in the PEM format.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  /**
   * @remarks
   * The name of the CSR.
   * 
   * @example
   * name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * @example
   * 2271
   */
  csrId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
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

export class UploadCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The content of the encryption certificate in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCA***
   * -----END CERTIFICATE-----
   */
  encryptCert?: string;
  /**
   * @remarks
   * The private key of the encryption certificate in the PEM format.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEI****
   * -----END EC PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The private key of the certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  key?: string;
  /**
   * @remarks
   * The name of the certificate. The name can be up to 64 characters in length, and can contain all types of characters, such as letters, digits, and underscores (_).
   * 
   * >  The name must be unique within an Alibaba Cloud account.
   * 
   * @example
   * cert-1
   */
  name?: string;
  /**
   * @remarks
   * the resource group id.
   * 
   * @example
   * rg-ae****vty
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The content of the signing certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  signCert?: string;
  /**
   * @remarks
   * The private key of the signing certificate in the PEM format.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEILR****
   * -----END EC PRIVATE KEY-----
   */
  signPrivateKey?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: UploadUserCertificateRequestTags[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      key: 'Key',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      key: 'string',
      name: 'string',
      resourceGroupId: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
      tags: { 'type': 'array', 'itemType': UploadUserCertificateRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345
   */
  certId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDB81BA2-E1F5-4D08-A2DD-4BE2BF44C90E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cas-upload-j2ofdb
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadUserCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the unique identifier of a certificate.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 5870821-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data for which you want to verify the signature. The value must be encoded in Base64.\\
   * For example, if the hexadecimal data that you want to verify is [0x31, 0x32, 0x33, 0x34], set the parameter to the Base64-encoded value MTIzNA==. If you set MessageType to RAW, the size of the data must be less than 4 KB. If the size of the data is greater than 4 KB, you can set MessageType to DIGEST and set Message to the digest of the data. The digest is also called hash value. You can compute the digest of the data on an on-premises machine. The certificate repository uses your certificate application system to compute the message digest. The message digest algorithm that is used must meet the requirements of the specified signature algorithm. The following signature algorithms require different message digest algorithms:
   * 
   * *   If the signature algorithm is SHA256withRSA, SHA256withRSA/PSS, or SHA256withECDSA, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM3withSM2, the message digest algorithm must be SM3.
   * 
   * This parameter is required.
   * 
   * @example
   * MTIzNA==
   */
  message?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   **RAW**: the raw data. This is the default value.
   * *   **DIGEST**: the message digest of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature value. The value must be encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * eyaC0w3ROK5b3QcHmUtAhMY/sQjKu2t3uBfnf6J/gn7JfZtyxwcCUjzXbw5jmqJQRbj1te670Bshg9kUdanKhtHFhJjU5jX+ZMMBr6pH0gqQDJxR0K0yHXRc0Q5OQoUZ6BfpbI4Wt4jJvJSdCstz1vSg12CfEHS8Kd5qfhItK7Y=
   */
  signatureValue?: string;
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   **SHA256withRSA**
   * *   **SHA256withRSA/PSS**
   * *   **SHA256withECDSA**
   * *   **SM3withSM2**
   * 
   * This parameter is required.
   * 
   * @example
   * SHA256withRSA
   */
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      message: 'string',
      messageType: 'string',
      signatureValue: 'string',
      signingAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1ed33293-2e48-6b14-861e-538e28e408eb
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the signature is valid. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "cas.aliyuncs.com",
      'ap-northeast-2-pop': "cas.aliyuncs.com",
      'ap-southeast-3': "cas.aliyuncs.com",
      'ap-southeast-5': "cas.aliyuncs.com",
      'cn-beijing': "cas.aliyuncs.com",
      'cn-beijing-finance-1': "cas.aliyuncs.com",
      'cn-beijing-finance-pop': "cas.aliyuncs.com",
      'cn-beijing-gov-1': "cas.aliyuncs.com",
      'cn-beijing-nu16-b01': "cas.aliyuncs.com",
      'cn-chengdu': "cas.aliyuncs.com",
      'cn-edge-1': "cas.aliyuncs.com",
      'cn-fujian': "cas.aliyuncs.com",
      'cn-haidian-cm12-c01': "cas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cas.aliyuncs.com",
      'cn-hangzhou-finance': "cas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cas.aliyuncs.com",
      'cn-hangzhou-test-306': "cas.aliyuncs.com",
      'cn-hongkong': "cas.aliyuncs.com",
      'cn-hongkong-finance-pop': "cas.aliyuncs.com",
      'cn-huhehaote': "cas.aliyuncs.com",
      'cn-huhehaote-nebula-1': "cas.aliyuncs.com",
      'cn-north-2-gov-1': "cas.aliyuncs.com",
      'cn-qingdao': "cas.aliyuncs.com",
      'cn-qingdao-nebula': "cas.aliyuncs.com",
      'cn-shanghai': "cas.aliyuncs.com",
      'cn-shanghai-et15-b01': "cas.aliyuncs.com",
      'cn-shanghai-et2-b01': "cas.aliyuncs.com",
      'cn-shanghai-finance-1': "cas.aliyuncs.com",
      'cn-shanghai-inner': "cas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cas.aliyuncs.com",
      'cn-shenzhen': "cas.aliyuncs.com",
      'cn-shenzhen-finance-1': "cas.aliyuncs.com",
      'cn-shenzhen-inner': "cas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cas.aliyuncs.com",
      'cn-wuhan': "cas.aliyuncs.com",
      'cn-wulanchabu': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei': "cas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cas.aliyuncs.com",
      'cn-zhangjiakou': "cas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cas.aliyuncs.com",
      'eu-west-1': "cas.aliyuncs.com",
      'eu-west-1-oxs': "cas.aliyuncs.com",
      'rus-west-1-pop': "cas.aliyuncs.com",
      'us-east-1': "cas.aliyuncs.com",
      'us-west-1': "cas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Revokes an issued certificate and cancels the application order of the certificate.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelCertificateForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequestWithOptions(request: CancelCertificateForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<CancelCertificateForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new CancelCertificateForPackageRequestResponse({}));
    } else {
      return $dara.cast<CancelCertificateForPackageRequestResponse>(await this.execute(params, req, runtime), new CancelCertificateForPackageRequestResponse({}));
    }

  }

  /**
   * Revokes an issued certificate and cancels the application order of the certificate.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelCertificateForPackageRequestRequest
   * @returns CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequest(request: CancelCertificateForPackageRequestRequest): Promise<CancelCertificateForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Cancels a certificate application order that is in the pending validation or being reviewed state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelOrderRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderRequestResponse
   */
  async cancelOrderRequestWithOptions(request: CancelOrderRequestRequest, runtime: $dara.RuntimeOptions): Promise<CancelOrderRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelOrderRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelOrderRequestResponse>(await this.callApi(params, req, runtime), new CancelOrderRequestResponse({}));
    } else {
      return $dara.cast<CancelOrderRequestResponse>(await this.execute(params, req, runtime), new CancelOrderRequestResponse({}));
    }

  }

  /**
   * Cancels a certificate application order that is in the pending validation or being reviewed state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelOrderRequestRequest
   * @returns CancelOrderRequestResponse
   */
  async cancelOrderRequest(request: CancelOrderRequestRequest): Promise<CancelOrderRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  /**
   * Submits a certificate application.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequestWithOptions(request: CreateCertificateForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<CreateCertificateForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateForPackageRequestResponse({}));
    } else {
      return $dara.cast<CreateCertificateForPackageRequestResponse>(await this.execute(params, req, runtime), new CreateCertificateForPackageRequestResponse({}));
    }

  }

  /**
   * Submits a certificate application.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateForPackageRequestRequest
   * @returns CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequest(request: CreateCertificateForPackageRequestRequest): Promise<CreateCertificateForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   * 
   * @remarks
   *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   * 
   * @param request - CreateCertificateRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateRequestResponse
   */
  async createCertificateRequestWithOptions(request: CreateCertificateRequestRequest, runtime: $dara.RuntimeOptions): Promise<CreateCertificateRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCertificateRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateRequestResponse({}));
    } else {
      return $dara.cast<CreateCertificateRequestResponse>(await this.execute(params, req, runtime), new CreateCertificateRequestResponse({}));
    }

  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   * 
   * @remarks
   *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   * 
   * @param request - CreateCertificateRequestRequest
   * @returns CreateCertificateRequestResponse
   */
  async createCertificateRequest(request: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   * 
   * @remarks
   *   You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateWithCsrRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequestWithOptions(request: CreateCertificateWithCsrRequestRequest, runtime: $dara.RuntimeOptions): Promise<CreateCertificateWithCsrRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCertificateWithCsrRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCertificateWithCsrRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateWithCsrRequestResponse({}));
    } else {
      return $dara.cast<CreateCertificateWithCsrRequestResponse>(await this.execute(params, req, runtime), new CreateCertificateWithCsrRequestResponse({}));
    }

  }

  /**
   * Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   * 
   * @remarks
   *   You can use this operation to apply for only a domain validated (DV) certificate. You cannot use this operation to apply for an organization validated (OV) certificate. We recommend that you use the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to apply for a certificate. You can use the CreateCertificateForPackageRequest operation to apply for certificates of all types and specify the CSR generation method.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of a certificate resource plan of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that you submit, and the number of certificates that are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you must call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required for domain name ownership verification and manually complete the verification. Then, your certificate application is reviewed by the certificate authority (CA). If you use the Domain Name System (DNS) verification method, you must complete the verification on your DNS service provider system. If you use the file verification method, you must complete the verification on the DNS server.
   * 
   * @param request - CreateCertificateWithCsrRequestRequest
   * @returns CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequest(request: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  /**
   * Creates a certificate signing request (CSR). A CSR file contains the information about an SSL certificate that you want to apply for. The information includes the domain names that you want to bind to the certificate and the name and the geographical location of the certificate holder. When you submit a certificate application to a certificate authority (CA), you must provide a CSR. After the CA approves your certificate application, the CA uses the private key of the root CA to sign your CSR and generates a public key file. The public key file is the SSL certificate that the CA issues to you. The private key of the SSL certificate is generated when you create the CSR.
   * 
   * @param request - CreateCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCsrResponse
   */
  async createCsrWithOptions(request: CreateCsrRequest, runtime: $dara.RuntimeOptions): Promise<CreateCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.keySize)) {
      query["KeySize"] = request.keySize;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.sans)) {
      query["Sans"] = request.sans;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCsrResponse>(await this.callApi(params, req, runtime), new CreateCsrResponse({}));
    } else {
      return $dara.cast<CreateCsrResponse>(await this.execute(params, req, runtime), new CreateCsrResponse({}));
    }

  }

  /**
   * Creates a certificate signing request (CSR). A CSR file contains the information about an SSL certificate that you want to apply for. The information includes the domain names that you want to bind to the certificate and the name and the geographical location of the certificate holder. When you submit a certificate application to a certificate authority (CA), you must provide a CSR. After the CA approves your certificate application, the CA uses the private key of the root CA to sign your CSR and generates a public key file. The public key file is the SSL certificate that the CA issues to you. The private key of the SSL certificate is generated when you create the CSR.
   * 
   * @param request - CreateCsrRequest
   * @returns CreateCsrResponse
   */
  async createCsr(request: CreateCsrRequest): Promise<CreateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCsrWithOptions(request, runtime);
  }

  /**
   * Creates a deployment task.
   * 
   * @param request - CreateDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentJobResponse
   */
  async createDeploymentJobWithOptions(request: CreateDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeploymentJobResponse>(await this.callApi(params, req, runtime), new CreateDeploymentJobResponse({}));
    } else {
      return $dara.cast<CreateDeploymentJobResponse>(await this.execute(params, req, runtime), new CreateDeploymentJobResponse({}));
    }

  }

  /**
   * Creates a deployment task.
   * 
   * @param request - CreateDeploymentJobRequest
   * @returns CreateDeploymentJobResponse
   */
  async createDeploymentJob(request: CreateDeploymentJobRequest): Promise<CreateDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Decrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecryptResponse
   */
  async decryptWithOptions(request: DecryptRequest, runtime: $dara.RuntimeOptions): Promise<DecryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Decrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DecryptResponse>(await this.callApi(params, req, runtime), new DecryptResponse({}));
    } else {
      return $dara.cast<DecryptResponse>(await this.execute(params, req, runtime), new DecryptResponse({}));
    }

  }

  /**
   * Decrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * Deletes an order in which the application for a domain validated (DV) certificate failed.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   * 
   * @param request - DeleteCertificateRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCertificateRequestResponse
   */
  async deleteCertificateRequestWithOptions(request: DeleteCertificateRequestRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCertificateRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCertificateRequestResponse>(await this.callApi(params, req, runtime), new DeleteCertificateRequestResponse({}));
    } else {
      return $dara.cast<DeleteCertificateRequestResponse>(await this.execute(params, req, runtime), new DeleteCertificateRequestResponse({}));
    }

  }

  /**
   * Deletes an order in which the application for a domain validated (DV) certificate failed.
   * 
   * @remarks
   * You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is **review failed**. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   * 
   * @param request - DeleteCertificateRequestRequest
   * @returns DeleteCertificateRequestResponse
   */
  async deleteCertificateRequest(request: DeleteCertificateRequestRequest): Promise<DeleteCertificateRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate signing request (CSR) file.
   * 
   * @param request - DeleteCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCsrResponse
   */
  async deleteCsrWithOptions(request: DeleteCsrRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCsrResponse>(await this.callApi(params, req, runtime), new DeleteCsrResponse({}));
    } else {
      return $dara.cast<DeleteCsrResponse>(await this.execute(params, req, runtime), new DeleteCsrResponse({}));
    }

  }

  /**
   * Deletes a certificate signing request (CSR) file.
   * 
   * @param request - DeleteCsrRequest
   * @returns DeleteCsrResponse
   */
  async deleteCsr(request: DeleteCsrRequest): Promise<DeleteCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCsrWithOptions(request, runtime);
  }

  /**
   * Deletes a deployment task.
   * 
   * @param request - DeleteDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentJobResponse
   */
  async deleteDeploymentJobWithOptions(request: DeleteDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeploymentJobResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentJobResponse({}));
    } else {
      return $dara.cast<DeleteDeploymentJobResponse>(await this.execute(params, req, runtime), new DeleteDeploymentJobResponse({}));
    }

  }

  /**
   * Deletes a deployment task.
   * 
   * @param request - DeleteDeploymentJobRequest
   * @returns DeleteDeploymentJobResponse
   */
  async deleteDeploymentJob(request: DeleteDeploymentJobRequest): Promise<DeleteDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Deletes a private certificate from a certificate application repository.
   * 
   * @remarks
   * You can call the DeletePCACert operation to delete a private certificate from a certificate application repository.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeletePCACertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePCACertResponse
   */
  async deletePCACertWithOptions(request: DeletePCACertRequest, runtime: $dara.RuntimeOptions): Promise<DeletePCACertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePCACert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePCACertResponse>(await this.callApi(params, req, runtime), new DeletePCACertResponse({}));
    } else {
      return $dara.cast<DeletePCACertResponse>(await this.execute(params, req, runtime), new DeletePCACertResponse({}));
    }

  }

  /**
   * Deletes a private certificate from a certificate application repository.
   * 
   * @remarks
   * You can call the DeletePCACert operation to delete a private certificate from a certificate application repository.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeletePCACertRequest
   * @returns DeletePCACertResponse
   */
  async deletePCACert(request: DeletePCACertRequest): Promise<DeletePCACertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePCACertWithOptions(request, runtime);
  }

  /**
   * Deletes an expired or uploaded certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteUserCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserCertificateResponse
   */
  async deleteUserCertificateWithOptions(request: DeleteUserCertificateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserCertificateResponse>(await this.callApi(params, req, runtime), new DeleteUserCertificateResponse({}));
    } else {
      return $dara.cast<DeleteUserCertificateResponse>(await this.execute(params, req, runtime), new DeleteUserCertificateResponse({}));
    }

  }

  /**
   * Deletes an expired or uploaded certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteUserCertificateRequest
   * @returns DeleteUserCertificateResponse
   */
  async deleteUserCertificate(request: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes the worker of a deployment task.
   * 
   * @param request - DeleteWorkerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkerResourceResponse
   */
  async deleteWorkerResourceWithOptions(request: DeleteWorkerResourceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteWorkerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWorkerResourceResponse>(await this.callApi(params, req, runtime), new DeleteWorkerResourceResponse({}));
    } else {
      return $dara.cast<DeleteWorkerResourceResponse>(await this.execute(params, req, runtime), new DeleteWorkerResourceResponse({}));
    }

  }

  /**
   * Deletes the worker of a deployment task.
   * 
   * @param request - DeleteWorkerResourceRequest
   * @returns DeleteWorkerResourceResponse
   */
  async deleteWorkerResource(request: DeleteWorkerResourceRequest): Promise<DeleteWorkerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkerResourceWithOptions(request, runtime);
  }

  /**
   * Queries the status of a specified certificate application order.
   * 
   * @remarks
   * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
   * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
   * 
   * @param request - DescribeCertificateStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificateStateResponse
   */
  async describeCertificateStateWithOptions(request: DescribeCertificateStateRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCertificateStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertificateState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCertificateStateResponse>(await this.callApi(params, req, runtime), new DescribeCertificateStateResponse({}));
    } else {
      return $dara.cast<DescribeCertificateStateResponse>(await this.execute(params, req, runtime), new DescribeCertificateStateResponse({}));
    }

  }

  /**
   * Queries the status of a specified certificate application order.
   * 
   * @remarks
   * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
   * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
   * 
   * @param request - DescribeCertificateStateRequest
   * @returns DescribeCertificateStateResponse
   */
  async describeCertificateState(request: DescribeCertificateStateRequest): Promise<DescribeCertificateStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  /**
   * Queries the number of third-party cloud resources on which you deployed certificates by using a multi-cloud deployment task.
   * 
   * @param request - DescribeCloudResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatusWithOptions(request: DescribeCloudResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudResourceStatusResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourceStatusResponse({}));
    } else {
      return $dara.cast<DescribeCloudResourceStatusResponse>(await this.execute(params, req, runtime), new DescribeCloudResourceStatusResponse({}));
    }

  }

  /**
   * Queries the number of third-party cloud resources on which you deployed certificates by using a multi-cloud deployment task.
   * 
   * @param request - DescribeCloudResourceStatusRequest
   * @returns DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatus(request: DescribeCloudResourceStatusRequest): Promise<DescribeCloudResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a deployment task. You can call the CreateDeploymentJob operation to create a deployment task and obtain the ID of the task.
   * 
   * @param request - DescribeDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeploymentJobResponse
   */
  async describeDeploymentJobWithOptions(request: DescribeDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeploymentJobResponse>(await this.callApi(params, req, runtime), new DescribeDeploymentJobResponse({}));
    } else {
      return $dara.cast<DescribeDeploymentJobResponse>(await this.execute(params, req, runtime), new DescribeDeploymentJobResponse({}));
    }

  }

  /**
   * Queries the details of a deployment task. You can call the CreateDeploymentJob operation to create a deployment task and obtain the ID of the task.
   * 
   * @param request - DescribeDeploymentJobRequest
   * @returns DescribeDeploymentJobResponse
   */
  async describeDeploymentJob(request: DescribeDeploymentJobRequest): Promise<DescribeDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the number of worker tasks in a deployment task.
   * 
   * @param request - DescribeDeploymentJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatusWithOptions(request: DescribeDeploymentJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeploymentJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeDeploymentJobStatusResponse({}));
    } else {
      return $dara.cast<DescribeDeploymentJobStatusResponse>(await this.execute(params, req, runtime), new DescribeDeploymentJobStatusResponse({}));
    }

  }

  /**
   * Queries the number of worker tasks in a deployment task.
   * 
   * @param request - DescribeDeploymentJobStatusRequest
   * @returns DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatus(request: DescribeDeploymentJobStatusRequest): Promise<DescribeDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the quota for domain validated (DV) certificates that you purchase and the quota usage.
   * 
   * @param request - DescribePackageStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageStateResponse
   */
  async describePackageStateWithOptions(request: DescribePackageStateRequest, runtime: $dara.RuntimeOptions): Promise<DescribePackageStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackageState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePackageStateResponse>(await this.callApi(params, req, runtime), new DescribePackageStateResponse({}));
    } else {
      return $dara.cast<DescribePackageStateResponse>(await this.execute(params, req, runtime), new DescribePackageStateResponse({}));
    }

  }

  /**
   * Queries the quota for domain validated (DV) certificates that you purchase and the quota usage.
   * 
   * @param request - DescribePackageStateRequest
   * @returns DescribePackageStateResponse
   */
  async describePackageState(request: DescribePackageStateRequest): Promise<DescribePackageStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

  /**
   * Encrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptResponse
   */
  async encryptWithOptions(request: EncryptRequest, runtime: $dara.RuntimeOptions): Promise<EncryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Encrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EncryptResponse>(await this.callApi(params, req, runtime), new EncryptResponse({}));
    } else {
      return $dara.cast<EncryptResponse>(await this.execute(params, req, runtime), new EncryptResponse({}));
    }

  }

  /**
   * Encrypts a certificate in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EncryptRequest
   * @returns EncryptResponse
   */
  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * Queries the quota for certificate repositories.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCertWarehouseQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuotaWithOptions(runtime: $dara.RuntimeOptions): Promise<GetCertWarehouseQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCertWarehouseQuota",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCertWarehouseQuotaResponse>(await this.callApi(params, req, runtime), new GetCertWarehouseQuotaResponse({}));
    } else {
      return $dara.cast<GetCertWarehouseQuotaResponse>(await this.execute(params, req, runtime), new GetCertWarehouseQuotaResponse({}));
    }

  }

  /**
   * Queries the quota for certificate repositories.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuota(): Promise<GetCertWarehouseQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertWarehouseQuotaWithOptions(runtime);
  }

  /**
   * Obtains the content of a certificate signing request (CSR) file.
   * 
   * @param request - GetCsrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCsrDetailResponse
   */
  async getCsrDetailWithOptions(request: GetCsrDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetCsrDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCsrDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCsrDetailResponse>(await this.callApi(params, req, runtime), new GetCsrDetailResponse({}));
    } else {
      return $dara.cast<GetCsrDetailResponse>(await this.execute(params, req, runtime), new GetCsrDetailResponse({}));
    }

  }

  /**
   * Obtains the content of a certificate signing request (CSR) file.
   * 
   * @param request - GetCsrDetailRequest
   * @returns GetCsrDetailResponse
   */
  async getCsrDetail(request: GetCsrDetailRequest): Promise<GetCsrDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCsrDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetUserCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserCertificateDetailResponse
   */
  async getUserCertificateDetailWithOptions(request: GetUserCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetUserCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certFilter)) {
      query["CertFilter"] = request.certFilter;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserCertificateDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserCertificateDetailResponse>(await this.callApi(params, req, runtime), new GetUserCertificateDetailResponse({}));
    } else {
      return $dara.cast<GetUserCertificateDetailResponse>(await this.execute(params, req, runtime), new GetUserCertificateDetailResponse({}));
    }

  }

  /**
   * Queries the details of a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetUserCertificateDetailRequest
   * @returns GetUserCertificateDetailResponse
   */
  async getUserCertificateDetail(request: GetUserCertificateDetailRequest): Promise<GetUserCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the certificates in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertResponse
   */
  async listCertWithOptions(request: ListCertRequest, runtime: $dara.RuntimeOptions): Promise<ListCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCertResponse>(await this.callApi(params, req, runtime), new ListCertResponse({}));
    } else {
      return $dara.cast<ListCertResponse>(await this.execute(params, req, runtime), new ListCertResponse({}));
    }

  }

  /**
   * Queries the certificates in a certificate repository.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertRequest
   * @returns ListCertResponse
   */
  async listCert(request: ListCertRequest): Promise<ListCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * Queries certificate repositories.
   * 
   * @remarks
   * You can call the ListCertWarehouse operation to query certificate repositories.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertWarehouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertWarehouseResponse
   */
  async listCertWarehouseWithOptions(request: ListCertWarehouseRequest, runtime: $dara.RuntimeOptions): Promise<ListCertWarehouseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCertWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCertWarehouseResponse>(await this.callApi(params, req, runtime), new ListCertWarehouseResponse({}));
    } else {
      return $dara.cast<ListCertWarehouseResponse>(await this.execute(params, req, runtime), new ListCertWarehouseResponse({}));
    }

  }

  /**
   * Queries certificate repositories.
   * 
   * @remarks
   * You can call the ListCertWarehouse operation to query certificate repositories.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListCertWarehouseRequest
   * @returns ListCertWarehouseResponse
   */
  async listCertWarehouse(request: ListCertWarehouseRequest): Promise<ListCertWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertWarehouseWithOptions(request, runtime);
  }

  /**
   * Queries a list of AccessKey pairs for multi-cloud deployment.
   * 
   * @param request - ListCloudAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAccessResponse
   */
  async listCloudAccessWithOptions(request: ListCloudAccessRequest, runtime: $dara.RuntimeOptions): Promise<ListCloudAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudAccess",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCloudAccessResponse>(await this.callApi(params, req, runtime), new ListCloudAccessResponse({}));
    } else {
      return $dara.cast<ListCloudAccessResponse>(await this.execute(params, req, runtime), new ListCloudAccessResponse({}));
    }

  }

  /**
   * Queries a list of AccessKey pairs for multi-cloud deployment.
   * 
   * @param request - ListCloudAccessRequest
   * @returns ListCloudAccessResponse
   */
  async listCloudAccess(request: ListCloudAccessRequest): Promise<ListCloudAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAccessWithOptions(request, runtime);
  }

  /**
   * Queries the certificate resources of a cloud service provider and cloud services.
   * 
   * @param tmpReq - ListCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudResourcesResponse
   */
  async listCloudResourcesWithOptions(tmpReq: ListCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListCloudResourcesResponse> {
    tmpReq.validate();
    let request = new ListCloudResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.certIds)) {
      request.certIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certIds, "CertIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.certIdsShrink)) {
      query["CertIds"] = request.certIdsShrink;
    }

    if (!$dara.isNull(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!$dara.isNull(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudResources",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCloudResourcesResponse>(await this.callApi(params, req, runtime), new ListCloudResourcesResponse({}));
    } else {
      return $dara.cast<ListCloudResourcesResponse>(await this.execute(params, req, runtime), new ListCloudResourcesResponse({}));
    }

  }

  /**
   * Queries the certificate resources of a cloud service provider and cloud services.
   * 
   * @param request - ListCloudResourcesRequest
   * @returns ListCloudResourcesResponse
   */
  async listCloudResources(request: ListCloudResourcesRequest): Promise<ListCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of contacts.
   * 
   * @param request - ListContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContactResponse
   */
  async listContactWithOptions(request: ListContactRequest, runtime: $dara.RuntimeOptions): Promise<ListContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListContactResponse>(await this.callApi(params, req, runtime), new ListContactResponse({}));
    } else {
      return $dara.cast<ListContactResponse>(await this.execute(params, req, runtime), new ListContactResponse({}));
    }

  }

  /**
   * Queries a list of contacts.
   * 
   * @param request - ListContactRequest
   * @returns ListContactResponse
   */
  async listContact(request: ListContactRequest): Promise<ListContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactWithOptions(request, runtime);
  }

  /**
   * Queries certificate signing requests (CSRs).
   * 
   * @param request - ListCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCsrResponse
   */
  async listCsrWithOptions(request: ListCsrRequest, runtime: $dara.RuntimeOptions): Promise<ListCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCsrResponse>(await this.callApi(params, req, runtime), new ListCsrResponse({}));
    } else {
      return $dara.cast<ListCsrResponse>(await this.execute(params, req, runtime), new ListCsrResponse({}));
    }

  }

  /**
   * Queries certificate signing requests (CSRs).
   * 
   * @param request - ListCsrRequest
   * @returns ListCsrResponse
   */
  async listCsr(request: ListCsrRequest): Promise<ListCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCsrWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment tasks that are created.
   * 
   * @param request - ListDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobResponse
   */
  async listDeploymentJobWithOptions(request: ListDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<ListDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentJobResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobResponse({}));
    } else {
      return $dara.cast<ListDeploymentJobResponse>(await this.execute(params, req, runtime), new ListDeploymentJobResponse({}));
    }

  }

  /**
   * Queries a list of deployment tasks that are created.
   * 
   * @param request - ListDeploymentJobRequest
   * @returns ListDeploymentJobResponse
   */
  async listDeploymentJob(request: ListDeploymentJobRequest): Promise<ListDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a deployment task. After you create a deployment task, you can call this operation to obtain the basic information about the deployment task, including the instance ID, type, and name of the certificate.
   * 
   * @param request - ListDeploymentJobCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobCertResponse
   */
  async listDeploymentJobCertWithOptions(request: ListDeploymentJobCertRequest, runtime: $dara.RuntimeOptions): Promise<ListDeploymentJobCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJobCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentJobCertResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobCertResponse({}));
    } else {
      return $dara.cast<ListDeploymentJobCertResponse>(await this.execute(params, req, runtime), new ListDeploymentJobCertResponse({}));
    }

  }

  /**
   * Queries the basic information about a deployment task. After you create a deployment task, you can call this operation to obtain the basic information about the deployment task, including the instance ID, type, and name of the certificate.
   * 
   * @param request - ListDeploymentJobCertRequest
   * @returns ListDeploymentJobCertResponse
   */
  async listDeploymentJobCert(request: ListDeploymentJobCertRequest): Promise<ListDeploymentJobCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobCertWithOptions(request, runtime);
  }

  /**
   * Queries the cloud resources of cloud services in a deployment task.
   * 
   * @param request - ListDeploymentJobResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResourceWithOptions(request: ListDeploymentJobResourceRequest, runtime: $dara.RuntimeOptions): Promise<ListDeploymentJobResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentJobResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeploymentJobResourceResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobResourceResponse({}));
    } else {
      return $dara.cast<ListDeploymentJobResourceResponse>(await this.execute(params, req, runtime), new ListDeploymentJobResourceResponse({}));
    }

  }

  /**
   * Queries the cloud resources of cloud services in a deployment task.
   * 
   * @param request - ListDeploymentJobResourceRequest
   * @returns ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResource(request: ListDeploymentJobResourceRequest): Promise<ListDeploymentJobResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentJobResourceWithOptions(request, runtime);
  }

  /**
   * Queries the certificates or certificate orders of users.
   * 
   * @remarks
   * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListUserCertificateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserCertificateOrderResponse
   */
  async listUserCertificateOrderWithOptions(request: ListUserCertificateOrderRequest, runtime: $dara.RuntimeOptions): Promise<ListUserCertificateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserCertificateOrder",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserCertificateOrderResponse>(await this.callApi(params, req, runtime), new ListUserCertificateOrderResponse({}));
    } else {
      return $dara.cast<ListUserCertificateOrderResponse>(await this.execute(params, req, runtime), new ListUserCertificateOrderResponse({}));
    }

  }

  /**
   * Queries the certificates or certificate orders of users.
   * 
   * @remarks
   * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListUserCertificateOrderRequest
   * @returns ListUserCertificateOrderResponse
   */
  async listUserCertificateOrder(request: ListUserCertificateOrderRequest): Promise<ListUserCertificateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserCertificateOrderWithOptions(request, runtime);
  }

  /**
   * Queries the details about the worker tasks of a deployment task. Alibaba Cloud allows you to deploy multiple certificates at a time. Therefore, a deployment task may include multiple worker tasks in multiple cloud services. A worker task refers to a task that deploys a certificate to a cloud resource in a cloud service.
   * 
   * @param request - ListWorkerResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkerResourceResponse
   */
  async listWorkerResourceWithOptions(request: ListWorkerResourceRequest, runtime: $dara.RuntimeOptions): Promise<ListWorkerResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWorkerResourceResponse>(await this.callApi(params, req, runtime), new ListWorkerResourceResponse({}));
    } else {
      return $dara.cast<ListWorkerResourceResponse>(await this.execute(params, req, runtime), new ListWorkerResourceResponse({}));
    }

  }

  /**
   * Queries the details about the worker tasks of a deployment task. Alibaba Cloud allows you to deploy multiple certificates at a time. Therefore, a deployment task may include multiple worker tasks in multiple cloud services. A worker task refers to a task that deploys a certificate to a cloud resource in a cloud service.
   * 
   * @param request - ListWorkerResourceRequest
   * @returns ListWorkerResourceResponse
   */
  async listWorkerResource(request: ListWorkerResourceRequest): Promise<ListWorkerResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkerResourceWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a certificate or certificate order belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
    } else {
      return $dara.cast<MoveResourceGroupResponse>(await this.execute(params, req, runtime), new MoveResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which a certificate or certificate order belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Submits a renewal application for an issued certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * 
   * @param request - RenewCertificateOrderForPackageRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequestWithOptions(request: RenewCertificateOrderForPackageRequestRequest, runtime: $dara.RuntimeOptions): Promise<RenewCertificateOrderForPackageRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewCertificateOrderForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenewCertificateOrderForPackageRequestResponse>(await this.callApi(params, req, runtime), new RenewCertificateOrderForPackageRequestResponse({}));
    } else {
      return $dara.cast<RenewCertificateOrderForPackageRequestResponse>(await this.execute(params, req, runtime), new RenewCertificateOrderForPackageRequestResponse({}));
    }

  }

  /**
   * Submits a renewal application for an issued certificate.
   * 
   * @remarks
   * You can call the RenewCertificateOrderForPackageRequest operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * 
   * @param request - RenewCertificateOrderForPackageRequestRequest
   * @returns RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequest(request: RenewCertificateOrderForPackageRequestRequest): Promise<RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  /**
   * Signs a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Sign operation to sign a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignResponse
   */
  async signWithOptions(request: SignRequest, runtime: $dara.RuntimeOptions): Promise<SignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Sign",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SignResponse>(await this.callApi(params, req, runtime), new SignResponse({}));
    } else {
      return $dara.cast<SignResponse>(await this.execute(params, req, runtime), new SignResponse({}));
    }

  }

  /**
   * Signs a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Sign operation to sign a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SignRequest
   * @returns SignResponse
   */
  async sign(request: SignRequest): Promise<SignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signWithOptions(request, runtime);
  }

  /**
   * Updates the private key of a certificate signing request (CSR).
   * 
   * @param request - UpdateCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCsrResponse
   */
  async updateCsrWithOptions(request: UpdateCsrRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCsrResponse>(await this.callApi(params, req, runtime), new UpdateCsrResponse({}));
    } else {
      return $dara.cast<UpdateCsrResponse>(await this.execute(params, req, runtime), new UpdateCsrResponse({}));
    }

  }

  /**
   * Updates the private key of a certificate signing request (CSR).
   * 
   * @param request - UpdateCsrRequest
   * @returns UpdateCsrResponse
   */
  async updateCsr(request: UpdateCsrRequest): Promise<UpdateCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCsrWithOptions(request, runtime);
  }

  /**
   * Updates a deployment task.
   * 
   * @param request - UpdateDeploymentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentJobResponse
   */
  async updateDeploymentJobWithOptions(request: UpdateDeploymentJobRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDeploymentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDeploymentJobResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentJobResponse({}));
    } else {
      return $dara.cast<UpdateDeploymentJobResponse>(await this.execute(params, req, runtime), new UpdateDeploymentJobResponse({}));
    }

  }

  /**
   * Updates a deployment task.
   * 
   * @param request - UpdateDeploymentJobRequest
   * @returns UpdateDeploymentJobResponse
   */
  async updateDeploymentJob(request: UpdateDeploymentJobRequest): Promise<UpdateDeploymentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobWithOptions(request, runtime);
  }

  /**
   * Updates the status of a deployment task.
   * 
   * @param request - UpdateDeploymentJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatusWithOptions(request: UpdateDeploymentJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDeploymentJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentJobStatusResponse({}));
    } else {
      return $dara.cast<UpdateDeploymentJobStatusResponse>(await this.execute(params, req, runtime), new UpdateDeploymentJobStatusResponse({}));
    }

  }

  /**
   * Updates the status of a deployment task.
   * 
   * @param request - UpdateDeploymentJobStatusRequest
   * @returns UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatus(request: UpdateDeploymentJobStatusRequest): Promise<UpdateDeploymentJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * Rolls back or executes a worker task in a deployment task.
   * 
   * @param request - UpdateWorkerResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatusWithOptions(request: UpdateWorkerResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateWorkerResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkerResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWorkerResourceStatusResponse>(await this.callApi(params, req, runtime), new UpdateWorkerResourceStatusResponse({}));
    } else {
      return $dara.cast<UpdateWorkerResourceStatusResponse>(await this.execute(params, req, runtime), new UpdateWorkerResourceStatusResponse({}));
    }

  }

  /**
   * Rolls back or executes a worker task in a deployment task.
   * 
   * @param request - UpdateWorkerResourceStatusRequest
   * @returns UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatus(request: UpdateWorkerResourceStatusRequest): Promise<UpdateWorkerResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkerResourceStatusWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate signing request (CSR) file
   * 
   * @param request - UploadCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCsrResponse
   */
  async uploadCsrWithOptions(request: UploadCsrRequest, runtime: $dara.RuntimeOptions): Promise<UploadCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadCsrResponse>(await this.callApi(params, req, runtime), new UploadCsrResponse({}));
    } else {
      return $dara.cast<UploadCsrResponse>(await this.execute(params, req, runtime), new UploadCsrResponse({}));
    }

  }

  /**
   * Uploads a certificate signing request (CSR) file
   * 
   * @param request - UploadCsrRequest
   * @returns UploadCsrResponse
   */
  async uploadCsr(request: UploadCsrRequest): Promise<UploadCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCsrWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UploadUserCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadUserCertificateResponse
   */
  async uploadUserCertificateWithOptions(request: UploadUserCertificateRequest, runtime: $dara.RuntimeOptions): Promise<UploadUserCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.encryptCert)) {
      query["EncryptCert"] = request.encryptCert;
    }

    if (!$dara.isNull(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.signCert)) {
      query["SignCert"] = request.signCert;
    }

    if (!$dara.isNull(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadUserCertificateResponse>(await this.callApi(params, req, runtime), new UploadUserCertificateResponse({}));
    } else {
      return $dara.cast<UploadUserCertificateResponse>(await this.execute(params, req, runtime), new UploadUserCertificateResponse({}));
    }

  }

  /**
   * Uploads a certificate.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UploadUserCertificateRequest
   * @returns UploadUserCertificateResponse
   */
  async uploadUserCertificate(request: UploadUserCertificateRequest): Promise<UploadUserCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadUserCertificateWithOptions(request, runtime);
  }

  /**
   * Verifies the signature of a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Verify operation to verify the signature of a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyResponse
   */
  async verifyWithOptions(request: VerifyRequest, runtime: $dara.RuntimeOptions): Promise<VerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    if (!$dara.isNull(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Verify",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyResponse>(await this.callApi(params, req, runtime), new VerifyResponse({}));
    } else {
      return $dara.cast<VerifyResponse>(await this.execute(params, req, runtime), new VerifyResponse({}));
    }

  }

  /**
   * Verifies the signature of a private certificate in a certificate application repository.
   * 
   * @remarks
   * You can call the Verify operation to verify the signature of a private certificate in a certificate application repository.
   * ### Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyRequest
   * @returns VerifyResponse
   */
  async verify(request: VerifyRequest): Promise<VerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyWithOptions(request, runtime);
  }

}
