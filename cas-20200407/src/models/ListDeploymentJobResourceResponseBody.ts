// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

