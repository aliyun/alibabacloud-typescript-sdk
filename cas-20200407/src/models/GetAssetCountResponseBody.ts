// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of Alibaba Cloud resources.
   * 
   * @example
   * 10
   */
  aliyunAssetCount?: number;
  /**
   * @remarks
   * The total number of Amazon Web Services (AWS) resources.
   * 
   * @example
   * 10
   */
  awsAssetCount?: number;
  /**
   * @remarks
   * The number of paid certificates.
   * 
   * @example
   * 10
   */
  buyCertificateCount?: number;
  /**
   * @remarks
   * The total number of domain name resources.
   * 
   * @example
   * 10
   */
  domainAssetCount?: number;
  /**
   * @remarks
   * The number of free certificates.
   * 
   * @example
   * 10
   */
  freeCertificateCount?: number;
  /**
   * @remarks
   * The total number of Huawei Cloud resources.
   * 
   * @example
   * 10
   */
  huaweiAssetCount?: number;
  /**
   * @remarks
   * The previous health score.
   * 
   * @example
   * 60
   */
  lastPoint?: number;
  /**
   * @remarks
   * The generated perspective.
   * 
   * @example
   * 50
   */
  point?: number;
  /**
   * @remarks
   * The health score ratio.
   * 
   * @example
   * 1
   */
  pointRatio?: number;
  /**
   * @remarks
   * The time when the health score was updated (in timestamp format, accurate to seconds).
   * 
   * @example
   * 1767681210879
   */
  pointTime?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * EECA10D5-BD0F-4EF1-B3EA-B4578E5C6F8E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Tencent Cloud resources.
   * 
   * @example
   * 10
   */
  tencentAssetCount?: number;
  /**
   * @remarks
   * The number of uploaded certificates.
   * 
   * @example
   * 10
   */
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

