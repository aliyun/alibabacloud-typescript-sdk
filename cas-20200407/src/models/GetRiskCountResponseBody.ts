// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of expired Alibaba Cloud certificates.
   * 
   * @example
   * 10
   */
  aliyunAssetCertificateExpiredCount?: number;
  /**
   * @remarks
   * Number of Alibaba Cloud certificates that will expire soon.
   * 
   * @example
   * 10
   */
  aliyunAssetCertificateWillExpiredCount?: number;
  /**
   * @remarks
   * Number of expired paid certificates.
   * 
   * @example
   * 10
   */
  buyCertificateExpireCount?: number;
  /**
   * @remarks
   * Number of paid certificates not deployed.
   * 
   * @example
   * 10
   */
  buyCertificateNotDeploymentCount?: number;
  /**
   * @remarks
   * Number of paid certificates not managed.
   * 
   * @example
   * 10
   */
  buyCertificateNotTrusteeCount?: number;
  /**
   * @remarks
   * Number of paid certificates that will expire soon.
   * 
   * @example
   * 10
   */
  buyCertificateWillExpiredCount?: number;
  /**
   * @remarks
   * Number of failed paid certificate orders.
   * 
   * @example
   * 10
   */
  buyCheckedFailCount?: number;
  /**
   * @remarks
   * Number of domains without monitoring configured.
   * 
   * @example
   * 10
   */
  domainAssetNotMonitorCount?: number;
  /**
   * @remarks
   * Number of expired free certificates.
   * 
   * @example
   * 10
   */
  freeCertificateExpireCount?: number;
  /**
   * @remarks
   * Number of free certificates not deployed.
   * 
   * @example
   * 10
   */
  freeCertificateNotDeploymentCount?: number;
  /**
   * @remarks
   * Number of free certificates that will expire soon.
   * 
   * @example
   * 10
   */
  freeCertificateWillExpiredCount?: number;
  /**
   * @remarks
   * Number of failed free certificate orders.
   * 
   * @example
   * 10
   */
  freeCheckedFailCount?: number;
  /**
   * @remarks
   * Number of expired multicloud certificates.
   * 
   * @example
   * 10
   */
  multiCloudAssetCertificateExpiredCount?: number;
  /**
   * @remarks
   * Number of multicloud certificates that will expire soon.
   * 
   * @example
   * 10
   */
  multiCloudAssetCertificateWillExpiredCount?: number;
  /**
   * @remarks
   * The ID of this API call. Alibaba Cloud generates this unique identifier for each request. Use it to troubleshoot and locate issues.
   * 
   * @example
   * 5BCD2F6C-7A9D-47C1-8588-2CC6A4E0BE5E
   */
  requestId?: string;
  /**
   * @remarks
   * Number of expired uploaded certificates.
   * 
   * @example
   * 10
   */
  uploadCertificateExpireCount?: number;
  /**
   * @remarks
   * Number of uploaded certificates not deployed.
   * 
   * @example
   * 10
   */
  uploadCertificateNotDeploymentCount?: number;
  /**
   * @remarks
   * Number of uploaded certificates without alerting configured.
   * 
   * @example
   * 10
   */
  uploadCertificateNotNoticeCount?: number;
  /**
   * @remarks
   * Number of uploaded certificates that will expire soon.
   * 
   * @example
   * 10
   */
  uploadCertificateWillExpiredCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunAssetCertificateExpiredCount: 'AliyunAssetCertificateExpiredCount',
      aliyunAssetCertificateWillExpiredCount: 'AliyunAssetCertificateWillExpiredCount',
      buyCertificateExpireCount: 'BuyCertificateExpireCount',
      buyCertificateNotDeploymentCount: 'BuyCertificateNotDeploymentCount',
      buyCertificateNotTrusteeCount: 'BuyCertificateNotTrusteeCount',
      buyCertificateWillExpiredCount: 'BuyCertificateWillExpiredCount',
      buyCheckedFailCount: 'BuyCheckedFailCount',
      domainAssetNotMonitorCount: 'DomainAssetNotMonitorCount',
      freeCertificateExpireCount: 'FreeCertificateExpireCount',
      freeCertificateNotDeploymentCount: 'FreeCertificateNotDeploymentCount',
      freeCertificateWillExpiredCount: 'FreeCertificateWillExpiredCount',
      freeCheckedFailCount: 'FreeCheckedFailCount',
      multiCloudAssetCertificateExpiredCount: 'MultiCloudAssetCertificateExpiredCount',
      multiCloudAssetCertificateWillExpiredCount: 'MultiCloudAssetCertificateWillExpiredCount',
      requestId: 'RequestId',
      uploadCertificateExpireCount: 'UploadCertificateExpireCount',
      uploadCertificateNotDeploymentCount: 'UploadCertificateNotDeploymentCount',
      uploadCertificateNotNoticeCount: 'UploadCertificateNotNoticeCount',
      uploadCertificateWillExpiredCount: 'UploadCertificateWillExpiredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAssetCertificateExpiredCount: 'number',
      aliyunAssetCertificateWillExpiredCount: 'number',
      buyCertificateExpireCount: 'number',
      buyCertificateNotDeploymentCount: 'number',
      buyCertificateNotTrusteeCount: 'number',
      buyCertificateWillExpiredCount: 'number',
      buyCheckedFailCount: 'number',
      domainAssetNotMonitorCount: 'number',
      freeCertificateExpireCount: 'number',
      freeCertificateNotDeploymentCount: 'number',
      freeCertificateWillExpiredCount: 'number',
      freeCheckedFailCount: 'number',
      multiCloudAssetCertificateExpiredCount: 'number',
      multiCloudAssetCertificateWillExpiredCount: 'number',
      requestId: 'string',
      uploadCertificateExpireCount: 'number',
      uploadCertificateNotDeploymentCount: 'number',
      uploadCertificateNotNoticeCount: 'number',
      uploadCertificateWillExpiredCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

