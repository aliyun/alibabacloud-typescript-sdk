// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCountResponseBody extends $dara.Model {
  aliyunAssetCount?: number;
  awsAssetCount?: number;
  buyCertificateCount?: number;
  domainAssetCount?: number;
  freeCertificateCount?: number;
  huaweiAssetCount?: number;
  lastPoint?: number;
  point?: number;
  pointRatio?: number;
  pointTime?: number;
  /**
   * @example
   * EECA10D5-BD0F-4EF1-B3EA-B4578E5C6F8E
   */
  requestId?: string;
  tencentAssetCount?: number;
  uploadCertificateCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunAssetCount: 'AliyunAssetCount',
      awsAssetCount: 'AwsAssetCount',
      buyCertificateCount: 'BuyCertificateCount',
      domainAssetCount: 'DomainAssetCount',
      freeCertificateCount: 'FreeCertificateCount',
      huaweiAssetCount: 'HuaweiAssetCount',
      lastPoint: 'LastPoint',
      point: 'Point',
      pointRatio: 'PointRatio',
      pointTime: 'PointTime',
      requestId: 'RequestId',
      tencentAssetCount: 'TencentAssetCount',
      uploadCertificateCount: 'UploadCertificateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAssetCount: 'number',
      awsAssetCount: 'number',
      buyCertificateCount: 'number',
      domainAssetCount: 'number',
      freeCertificateCount: 'number',
      huaweiAssetCount: 'number',
      lastPoint: 'number',
      point: 'number',
      pointRatio: 'number',
      pointTime: 'number',
      requestId: 'string',
      tencentAssetCount: 'number',
      uploadCertificateCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

