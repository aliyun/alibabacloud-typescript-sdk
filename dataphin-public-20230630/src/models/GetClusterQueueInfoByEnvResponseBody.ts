// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterQueueInfoByEnvResponseBodyData extends $dara.Model {
  /**
   * @example
   * {  "creator": "new_datasource@test.aliyunid.com",  "modifier": "new_datasource@test.aliyunid.com" }
   */
  annotations?: string;
  /**
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @example
   * 2024-10-31 10:29:17
   */
  createAt?: string;
  /**
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com/xxxx/flink:1.15.4-scala_2.12
   */
  flinkImageRegistry?: string;
  /**
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com
   */
  flinkImageRepository?: string;
  /**
   * @example
   * 1.15.4
   */
  flinkImageTag?: string;
  /**
   * @example
   * 1.15
   */
  flinkVersion?: string;
  /**
   * @example
   * cdh
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxVcore?: string;
  /**
   * @example
   * 2024-10-31 10:29:17
   */
  modifiedAt?: string;
  /**
   * @example
   * dataphinv45prod
   */
  namespace?: string;
  /**
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: string;
  /**
   * @example
   * {\\n  \\"kind\\" : \\"kubernetes\\",\\n  \\"kubernetes\\{"namespace" : "n1730341728989z7",    "clusterName" : "a51578bdcce145"  },  "state" : "ONLINE"}
   */
  spec?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetClusterQueueInfoByEnvResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

