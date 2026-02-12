// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints extends $dara.Model {
  /**
   * @remarks
   * The private HTTP endpoint of the instance.
   * 
   * @example
   * http://138015630679****.mqrest.cn-chengdu-internal.aliyuncs.com
   */
  httpInternalEndpoint?: string;
  /**
   * @remarks
   * The public HTTP endpoint of the instance.
   * 
   * @example
   * http://138015630679****.mqrest.cn-chengdu.aliyuncs.com
   */
  httpInternetEndpoint?: string;
  /**
   * @remarks
   * The public HTTPS endpoint of the instance.
   * 
   * @example
   * https://138015630679****.mqrest.cn-chengdu.aliyuncs.com
   */
  httpInternetSecureEndpoint?: string;
  /**
   * @remarks
   * The private TCP endpoint of the instance.
   * 
   * @example
   * http://MQ_INST_138015630679****_BAAy1Hac.cn-chengdu.mq-internal.aliyuncs.com:8080
   */
  tcpEndpoint?: string;
  /**
   * @remarks
   * The public TCP endpoint of the instance.
   * 
   * *   Only instances that are deployed in the China (Chengdu), China (Qingdao), or China (Shenzhen) region can be accessed by using public TCP endpoints.
   * 
   * *   Before you use a public TCP endpoint, make sure that your client SDK meets the following requirements:
   * 
   *     *   TCP client SDK for Java: V2.0.0.Final or later For more information, see [Release notes for the SDK for Java](https://help.aliyun.com/document_detail/325569.html).
   *     *   TCP client SDK for C++: V3.0.0 or later For more information, see [Release notes for the SDK for C++](https://help.aliyun.com/document_detail/325570.html).
   * 
   * *   You are charged for Internet traffic when you use a public TCP endpoint. For more information, see [Internet traffic fee](https://help.aliyun.com/document_detail/325571.html).
   * 
   * @example
   * http://MQ_INST_138015630679****_BAAy1Hac.mq.cn-chengdu.aliyuncs.com:80
   */
  tcpInternetEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      httpInternalEndpoint: 'HttpInternalEndpoint',
      httpInternetEndpoint: 'HttpInternetEndpoint',
      httpInternetSecureEndpoint: 'HttpInternetSecureEndpoint',
      tcpEndpoint: 'TcpEndpoint',
      tcpInternetEndpoint: 'TcpInternetEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInternalEndpoint: 'string',
      httpInternetEndpoint: 'string',
      httpInternetSecureEndpoint: 'string',
      tcpEndpoint: 'string',
      tcpInternetEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570701259403
   */
  createTime?: string;
  /**
   * @remarks
   * The endpoints used to access ApsaraMQ for RocketMQ over different protocols.
   */
  endpoints?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints;
  /**
   * @remarks
   * Indicates whether the instance uses a namespace. Valid values:
   * 
   * *   **true**: The instance uses a separate namespace. The name of each resource must be unique in the instance. The names of resources in different instances can be the same.
   * *   **false**: The instance does not use a separate namespace. The name of each resource must be globally unique within the instance and across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_138015630679****_BAAy1Hac
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **0**: The instance is being deployed. This value is valid only for Enterprise Platinum Edition instances.
   * *   **2**: The instance has overdue payments. This value is valid only for Standard Edition instances.
   * *   **5**: The instance is running. This value is valid for Standard Edition instances and Enterprise Platinum Edition instances.
   * *   **7**: The instance is being upgraded and is running. This value is valid only for Enterprise Platinum Edition instances.
   * 
   * @example
   * 5
   */
  instanceStatus?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **1**: Standard Edition instances that use the pay-as-you-go billing method.
   * *   **2**: Enterprise Platinum Edition instances that use the subscription billing method.
   * 
   * For information about the editions and specifications of ApsaraMQ for RocketMQ instances, see [Instance editions](https://help.aliyun.com/document_detail/185261.html).
   * 
   * @example
   * 2
   */
  instanceType?: number;
  /**
   * @remarks
   * The maximum messaging transactions per second (TPS). Valid values: 5000, 10000, 20000, 50000, 100000, 200000, 300000, 500000, 800000, and 1000000.
   * 
   * You can view the details about messaging TPS on the buy page of ApsaraMQ for RocketMQ.
   * 
   * > This parameter is available only to the ApsaraMQ for RocketMQ Enterprise Platinum Edition instances.
   * 
   * @example
   * 10000
   */
  maxTps?: number;
  /**
   * @remarks
   * The time when the Enterprise Platinum Edition instance expires.
   * 
   * @example
   * 1603555200000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ons-cn-m7r1r5f****
   */
  remark?: string;
  /**
   * @example
   * 2
   */
  supportClassic?: number;
  /**
   * @remarks
   * The maximum number of topics that can be created on the instance. Valid values: 25, 50, 100, 300, and 500.
   * 
   * > This parameter is available only to the ApsaraMQ for RocketMQ Enterprise Platinum Edition instances.
   * 
   * @example
   * 50
   */
  topicCapacity?: number;
  /**
   * @remarks
   * The commodity ID of the instance.
   * 
   * @example
   * ons-cn-m7r1r5f****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The commodity type of the instance.
   * 
   * @example
   * 1
   */
  spInstanceType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoints: 'Endpoints',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      maxTps: 'MaxTps',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      supportClassic: 'SupportClassic',
      topicCapacity: 'TopicCapacity',
      spInstanceId: 'spInstanceId',
      spInstanceType: 'spInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endpoints: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints,
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      maxTps: 'number',
      releaseTime: 'number',
      remark: 'string',
      supportClassic: 'number',
      topicCapacity: 'number',
      spInstanceId: 'string',
      spInstanceType: 'number',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  instanceBaseInfo?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 6CC46974-65E8-4C20-AB07-D20D102E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceBaseInfo: 'InstanceBaseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceBaseInfo: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceBaseInfo && typeof (this.instanceBaseInfo as any).validate === 'function') {
      (this.instanceBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

