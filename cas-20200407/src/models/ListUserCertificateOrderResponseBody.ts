// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCertificateOrderResponseBodyCertificateOrderList extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The Alibaba Cloud order ID. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 234567
   */
  aliyunOrderId?: number;
  /**
   * @remarks
   * The purchase time. Unit: milliseconds. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1634283958000
   */
  buyDate?: number;
  /**
   * @remarks
   * The certificate expiration time. Unit: milliseconds. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1665819958000
   */
  certEndTime?: number;
  /**
   * @remarks
   * The certificate start time. Unit: milliseconds. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1665819958000
   */
  certStartTime?: number;
  /**
   * @remarks
   * The certificate type. Returned when OrderType is set to CPACK or BUY. Valid values:
   * - **DV**: DV certificate.
   * - **EV**: EV certificate.
   * - **OV**: OV certificate.
   * - **FREE**: personal test certificate (supported only on the China site).
   * 
   * @example
   * FREE
   */
  certType?: string;
  /**
   * @remarks
   * The certificate ID. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 896521
   */
  certificateId?: number;
  /**
   * @remarks
   * The city. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * The common name of the certificate. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The domain name. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The total number of purchased domain names. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 1
   */
  domainCount?: number;
  /**
   * @remarks
   * The domain name type. Returned when OrderType is set to CPACK or BUY. Valid values:
   * 
   * - **ONE**: single domain name.
   * - **MULTIPLE**: multiple domain names.
   * - **WILDCARD**: single wildcard domain name.
   * - **M_WILDCARD**: multiple wildcard domain names.
   * - **MIX**: hybrid domain names.
   * 
   * @example
   * ONE
   */
  domainType?: string;
  /**
   * @remarks
   * The certificate end date. Returned when OrderType is set to CERT or UPLOAD. The date is in the YYYY-MM-DD format.
   * 
   * @example
   * 2022-11-17
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the certificate has expired. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The certificate fingerprint. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * CC6B3696E7C7CA715BD26E28E45FF3E3DF435C03
   */
  fingerprint?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * cas-instanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate issuer. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * MyIssuer
   */
  issuer?: string;
  /**
   * @remarks
   * The certificate name. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * cert-name
   */
  name?: string;
  /**
   * @remarks
   * The order ID. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * 2345687
   */
  orderId?: number;
  /**
   * @remarks
   * The organization name of the certificate. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 阿里云
   */
  orgName?: string;
  /**
   * @remarks
   * The third-party CA order ID. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * ca-123456
   */
  partnerOrderId?: string;
  /**
   * @remarks
   * The order specification ID. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * bykj123456
   */
  productCode?: string;
  /**
   * @remarks
   * The order specification name. Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * CFCA
   */
  productName?: string;
  /**
   * @remarks
   * The province or autonomous region. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @remarks
   * The resource group ID. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The brand (such as WoSign, CFCA, DigiCert, and vTrus). Returned when OrderType is set to CPACK or BUY.
   * 
   * @example
   * CFCA
   */
  rootBrand?: string;
  /**
   * @remarks
   * All domain names bound to the certificate. Multiple domain names are separated by commas (,). Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @remarks
   * The certificate serial number. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 040a6e493cffdda6d744acf99b6576cf
   */
  serialNo?: string;
  /**
   * @remarks
   * The SHA-2 value of the certificate. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * 56B4DED2243A81DD909D7C39824FFE4DDBD87F91BFA46CD333FF212FE0E7CB11
   */
  sha2?: string;
  /**
   * @remarks
   * The order type. Returned when OrderType is set to CPACK or BUY. Valid values:
   * 
   * - **cpack**: resource virtual order.
   * - **buy**: purchase order.
   * 
   * @example
   * buy
   */
  sourceType?: string;
  /**
   * @remarks
   * The certificate start date. Returned when OrderType is set to CERT or UPLOAD. The date is in the YYYY-MM-DD format.
   * 
   * @example
   * 2021-11-16
   */
  startDate?: string;
  /**
   * @remarks
   * The order or certificate status. Returned when OrderType is set to CPACK or BUY. Valid values:
   * 
   * - **PAYED**: Pending application.
   * - **CHECKING**: Under review.
   * - **CHECKED_FAIL**: Review failed.
   * - **ISSUED**: Issued.
   * - **WILLEXPIRED**: About to expire.
   * - **EXPIRED**: Expired.
   * - **NOTACTIVATED**: Not activated.
   * - **REVOKED**: Revoked.
   * 
   * @example
   * PAYED
   */
  status?: string;
  /**
   * @remarks
   * The hosting status. Returned when OrderType is set to CPACK or BUY. Valid values:
   * 
   * - **unTrustee**: Not hosted.
   * - **trustee**: Hosted.
   * 
   * @example
   * unTrustee
   */
  trusteeStatus?: string;
  /**
   * @remarks
   * Indicates whether the certificate is an uploaded certificate. Returned when OrderType is set to CERT or UPLOAD.
   * 
   * @example
   * false
   */
  upload?: boolean;
  /**
   * @remarks
   * The number of purchased wildcard domain names. Returned when OrderType is set to CPACK or BUY.
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
   * The certificate and order list.
   * 
   * @example
   * {"CertificateOrderList": [{"Status": "PAYED","ProductName": "专业版通配符 OV SSL","InstanceId": "cert-instanceId","ProductCode": "globalsign-xxxx","SourceType": "buy","WildDomainCount": 1,"CertType": "OV","PartnerOrderId": "","OrderId": 3451111,"Algorithm": "RSA","RootBrand": "GlobalSign","AliyunOrderId": 21xxxxxx40655,"DomainType": "WILDCARD","TrusteeStatus": "trustee","Domain": "","BuyDate": 1632649385000,"DomainCount": 1}]}
   */
  certificateOrderList?: ListUserCertificateOrderResponseBodyCertificateOrderList[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page.
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

