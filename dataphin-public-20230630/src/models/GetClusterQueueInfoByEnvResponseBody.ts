// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterQueueInfoByEnvResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * {  "creator": "new_datasource@test.aliyunid.com",  "modifier": "new_datasource@test.aliyunid.com" }
   */
  annotations?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-31 10:29:17
   */
  createAt?: string;
  /**
   * @remarks
   * The Flink image registry address.
   * 
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com/xxxx/flink:1.15.4-scala_2.12
   */
  flinkImageRegistry?: string;
  /**
   * @remarks
   * The Flink image repository.
   * 
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com
   */
  flinkImageRepository?: string;
  /**
   * @remarks
   * The Flink image tag.
   * 
   * @example
   * 1.15.4
   */
  flinkImageTag?: string;
  /**
   * @remarks
   * The Flink version.
   * 
   * @example
   * 1.15
   */
  flinkVersion?: string;
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * cdh
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of vCores provided by each queue.
   * 
   * @example
   * 10
   */
  maxVcore?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-10-31 10:29:17
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * dataphinv45prod
   */
  namespace?: string;
  /**
   * @remarks
   * The queue name, which serves as a unique identifier. For Kubernetes, this is the resource group name.
   * 
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The resource version.
   * 
   * @example
   * 1
   */
  resourceVersion?: string;
  /**
   * @remarks
   * The resource specification.
   * 
   * @example
   * {\\n  \\"kind\\" : \\"kubernetes\\",\\n  \\"kubernetes\\{"namespace" : "n1730341728989z7",    "clusterName" : "a51578bdcce145"  },  "state" : "ONLINE"}
   */
  spec?: string;
  /**
   * @remarks
   * The VVP cluster type.
   * 
   * @example
   * PREJOB
   */
  vvpClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      createAt: 'CreateAt',
      flinkImageRegistry: 'FlinkImageRegistry',
      flinkImageRepository: 'FlinkImageRepository',
      flinkImageTag: 'FlinkImageTag',
      flinkVersion: 'FlinkVersion',
      labels: 'Labels',
      maxVcore: 'MaxVcore',
      modifiedAt: 'ModifiedAt',
      namespace: 'Namespace',
      queueName: 'QueueName',
      resourceVersion: 'ResourceVersion',
      spec: 'Spec',
      vvpClusterType: 'VvpClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      clusterId: 'string',
      createAt: 'string',
      flinkImageRegistry: 'string',
      flinkImageRepository: 'string',
      flinkImageTag: 'string',
      flinkVersion: 'string',
      labels: 'string',
      maxVcore: 'string',
      modifiedAt: 'string',
      namespace: 'string',
      queueName: 'string',
      resourceVersion: 'string',
      spec: 'string',
      vvpClusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterQueueInfoByEnvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetClusterQueueInfoByEnvResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetClusterQueueInfoByEnvResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

