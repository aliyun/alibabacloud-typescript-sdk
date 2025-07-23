// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

