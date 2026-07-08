// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate that is attached to the cloud product resource. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1681956830000
   */
  certEndTime?: string;
  /**
   * @remarks
   * The ID of the certificate that is attached to the cloud product resource.
   * 
   * @example
   * 11599949
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate that is attached to the cloud product resource.
   * 
   * @example
   * sc-SSL
   */
  certName?: string;
  /**
   * @remarks
   * The start date of the certificate that is attached to the cloud product resource. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1681956830000
   */
  certStartTime?: string;
  /**
   * @remarks
   * The key ID used to access the cloud resource set.
   * 
   * > This parameter is returned only for multicloud deployments.
   * 
   * @example
   * 1234
   */
  cloudAccessId?: string;
  /**
   * @remarks
   * The provider of the cloud product resource.
   * 
   * - **aliyun**: Alibaba Cloud
   * 
   * - **Tencent**: Tencent Cloud
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * <props="china">
   * 
   * - **SLB**: Classic Load Balancer (CLB) (China site only)
   * 
   * - **LIVE**: ApsaraVideo Live (China site only)
   * 
   * - **webHosting**: Cloud Web Hosting (China site only)
   * 
   * - **VOD**: ApsaraVideo VOD (China site only)
   * 
   * - **CR**: Container Registry (China site only)
   * 
   * 
   * 
   * - **DCDN**: DCDN
   * 
   * - **DDOS**: Anti-DDoS
   * 
   * - **CDN**: Alibaba Cloud CDN
   * 
   * - **ALB**: Application Load Balancer
   * 
   * - **APIGateway**: API Gateway
   * 
   * - **FC**: Function Compute
   * 
   * - **GA**: Global Accelerator
   * 
   * - **MSE**: MSE
   * 
   * - **NLB**: Network Load Balancer
   * 
   * - **OSS**: OSS
   * 
   * - **SAE**: SAE
   * 
   * - **TencentCDN**: Tencent CDN
   * 
   * - **WAF**: WAF
   * 
   * @example
   * SLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud product resource from the cloud provider.
   * 
   * @example
   * cn-hangzhou
   */
  cloudRegion?: string;
  /**
   * @remarks
   * Indicates whether the cloud product resource is a default resource.
   * 
   * - **1**: Default resource
   * 
   * - **0**: Not a default resource
   * 
   * > This parameter is returned only for deployments of SLB, NLB, ALB, and GA.
   * 
   * @example
   * 0
   */
  defaultResource?: number;
  /**
   * @remarks
   * The domain name that is attached to the cloud product resource.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled for the cloud product resource.
   * 
   * - **1**: Enabled
   * 
   * - **0**: Disabled
   * 
   * @example
   * 1
   */
  enableHttps?: number;
  /**
   * @remarks
   * The time when the synchronized resource was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1673423339000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the synchronized resource was last modified. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1681956830000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cloud product resource.
   * 
   * @example
   * 20979
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the cloud product resource.
   * 
   * > This parameter is returned only for deployments of SLB, NLB, ALB, and GA.
   * 
   * @example
   * cas-cn-m7r1qocw91at
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener ID of the cloud product resource.
   * 
   * > This parameter is returned only for deployments of SLB, NLB, ALB, and GA.
   * 
   * @example
   * lsn-vwdff0q20poq5xazb9@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port of the cloud product resource.
   * 
   * > This parameter is returned only for deployments of SLB, NLB, ALB, and GA.
   * 
   * @example
   * 8047
   */
  listenerPort?: string;
  /**
   * @remarks
   * The region ID of the synchronized cloud product resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Other metadata about the cloud product resource.
   * 
   * @example
   * {\\"camera_model\\":\\"GIFSHOW [1267087617][OnePlus
   */
  remark?: string;
  /**
   * @remarks
   * The status of the synchronized cloud product resource.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether an Alibaba Cloud SSL certificate is used.
   * 
   * - **1**: Yes
   * 
   * - **0**: No
   * 
   * > This parameter is returned only for multicloud deployments.
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
   * 1666884372******
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
   * The data returned.
   */
  data?: ListDeploymentJobResourceResponseBodyData[];
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
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

