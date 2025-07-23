// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

