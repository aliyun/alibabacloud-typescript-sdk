// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

