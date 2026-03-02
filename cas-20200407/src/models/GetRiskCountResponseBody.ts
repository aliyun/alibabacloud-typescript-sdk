// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskCountResponseBody extends $dara.Model {
  aliyunAssetCertificateExpiredCount?: number;
  aliyunAssetCertificateWillExpiredCount?: number;
  buyCertificateExpireCount?: number;
  buyCertificateNotDeploymentCount?: number;
  buyCertificateNotTrusteeCount?: number;
  buyCertificateWillExpiredCount?: number;
  buyCheckedFailCount?: number;
  domainAssetNotMonitorCount?: number;
  freeCertificateExpireCount?: number;
  freeCertificateNotDeploymentCount?: number;
  freeCertificateWillExpiredCount?: number;
  freeCheckedFailCount?: number;
  multiCloudAssetCertificateExpiredCount?: number;
  multiCloudAssetCertificateWillExpiredCount?: number;
  /**
   * @example
   * 5BCD2F6C-7A9D-47C1-8588-2CC6A4E0BE5E
   */
  requestId?: string;
  uploadCertificateExpireCount?: number;
  uploadCertificateNotDeploymentCount?: number;
  uploadCertificateNotNoticeCount?: number;
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

