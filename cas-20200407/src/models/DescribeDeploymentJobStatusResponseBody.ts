// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentJobStatusResponseBodyProductWorkerCount extends $dara.Model {
  /**
   * @remarks
   * The total number of resources of a cloud service in the deployment task.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The name of the cloud service. Valid values:
   * 
   * *   **SLB**: Classic Load Balancer (CLB). This value is supported only at the China site (aliyun.com).
   * *   **LIVE**: ApsaraVideo Live. This value is supported only at the China site (aliyun.com).
   * *   **webHosting**: Cloud Web Hosting. This value is supported only at the China site (aliyun.com).
   * *   **VOD**: ApsaraVideo VOD. This value is supported only at the China site (aliyun.com).
   * *   **CR**: Container Registry. This value is supported only at the China site (aliyun.com).
   * *   **DCDN**: Dynamic Content Delivery Network (DCDN).
   * *   **DDOS**: Anti-DDoS.
   * *   **CDN**: Alibaba Cloud CDN (CDN).
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
   * NLB
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of purchased resources.
   * 
   * @example
   * 500
   */
  buyCount?: number;
  /**
   * @remarks
   * The number of certificates involved in the deployment task.
   * 
   * @example
   * 20
   */
  certCount?: number;
  /**
   * @remarks
   * The number of resources consumed by worker tasks.
   * 
   * @example
   * 20
   */
  costCount?: number;
  /**
   * @remarks
   * The number of failed worker tasks, excluding rollback tasks.
   * 
   * @example
   * 20
   */
  failedCount?: number;
  /**
   * @remarks
   * The total number of worker tasks that match the certificate.
   * 
   * @example
   * 20
   */
  matchWorkerCount?: number;
  /**
   * @remarks
   * The number of cloud resources to which certificates are deployed in the deployment task.
   */
  productWorkerCount?: DescribeDeploymentJobStatusResponseBodyProductWorkerCount[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 4127
   */
  resourceCount?: number;
  /**
   * @remarks
   * The number of worker tasks that are rolled backed.
   * 
   * @example
   * 20
   */
  rollbackCount?: number;
  /**
   * @remarks
   * The number of worker tasks that failed to be rolled back.
   * 
   * @example
   * 20
   */
  rollbackFailedCount?: number;
  /**
   * @remarks
   * The number of worker tasks that are successfully rolled back.
   * 
   * @example
   * 20
   */
  rollbackSuccessCount?: number;
  /**
   * @remarks
   * The number of successful worker tasks, excluding rollback tasks.
   * 
   * @example
   * 20
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of used resources.
   * 
   * @example
   * 300
   */
  useCount?: number;
  /**
   * @remarks
   * The total number of resources to which certificate are deployed in the current cloud service. The value indicates the total number of worker tasks.
   * 
   * @example
   * 20
   */
  workerCount?: number;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      certCount: 'CertCount',
      costCount: 'CostCount',
      failedCount: 'FailedCount',
      matchWorkerCount: 'MatchWorkerCount',
      productWorkerCount: 'ProductWorkerCount',
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
      rollbackCount: 'RollbackCount',
      rollbackFailedCount: 'RollbackFailedCount',
      rollbackSuccessCount: 'RollbackSuccessCount',
      successCount: 'SuccessCount',
      useCount: 'UseCount',
      workerCount: 'WorkerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'number',
      certCount: 'number',
      costCount: 'number',
      failedCount: 'number',
      matchWorkerCount: 'number',
      productWorkerCount: { 'type': 'array', 'itemType': DescribeDeploymentJobStatusResponseBodyProductWorkerCount },
      requestId: 'string',
      resourceCount: 'number',
      rollbackCount: 'number',
      rollbackFailedCount: 'number',
      rollbackSuccessCount: 'number',
      successCount: 'number',
      useCount: 'number',
      workerCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productWorkerCount)) {
      $dara.Model.validateArray(this.productWorkerCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

