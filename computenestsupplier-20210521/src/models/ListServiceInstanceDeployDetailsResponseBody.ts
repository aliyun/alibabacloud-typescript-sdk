// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceDeployDetailsResponseBodyDeployDetails extends $dara.Model {
  /**
   * @remarks
   * The number of rows in the aggregate data.
   * 
   * @example
   * 4
   */
  count?: string;
  /**
   * @remarks
   * The time when the entry was created.
   * 
   * @example
   * 2024-04-10T01:58:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The aggregation period.
   * 
   * @example
   * Month
   */
  cycle?: string;
  /**
   * @remarks
   * Indicates whether the deployment was successful.
   * 
   * @example
   * False
   */
  deploySucceeded?: string;
  /**
   * @remarks
   * The error code returned when the deployment failed.
   * 
   * @example
   * StackValidationFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * {code: StackValidationFailed, message: \\"Failed to continue create ROS stack 89e724e2-84e6-4517-a372-30a545ab4145: Resource [LinuxInstanceRunCommand]: i-wz91nfbh1fxtmfb0try4 are not running. Command invocation only support running instances. ErrorCode: StackValidationFailed\\", requestId: null}
   */
  errorDetail?: string;
  /**
   * @remarks
   * The type of the error that occurred when the deployment failed.
   * 
   * @example
   * ValidationError
   */
  errorType?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c751ed91f2074af39779
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-273e8cee11d349e1803c
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The Chinese name of the service.
   * 
   * @example
   * 测试服务
   */
  serviceNameChn?: string;
  /**
   * @remarks
   * The English name of the service.
   * 
   * @example
   * Test Service
   */
  serviceNameEng?: string;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is hosted in the service provider\\"s account.
   * 
   * - operation: The service is an Alibaba Cloud Managed Service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 42
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1723946641994
   */
  timestamp?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1591457835436382
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      cycle: 'Cycle',
      deploySucceeded: 'DeploySucceeded',
      errorCode: 'ErrorCode',
      errorDetail: 'ErrorDetail',
      errorType: 'ErrorType',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceNameChn: 'ServiceNameChn',
      serviceNameEng: 'ServiceNameEng',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      timestamp: 'Timestamp',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      createTime: 'string',
      cycle: 'string',
      deploySucceeded: 'string',
      errorCode: 'string',
      errorDetail: 'string',
      errorType: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceNameChn: 'string',
      serviceNameEng: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      timestamp: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deployment details of the service instance.
   */
  deployDetails?: ListServiceInstanceDeployDetailsResponseBodyDeployDetails[];
  /**
   * @remarks
   * The number of entries returned per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0036D82E-0624-5B37-B797-C460F4B02026
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployDetails: 'DeployDetails',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployDetails: { 'type': 'array', 'itemType': ListServiceInstanceDeployDetailsResponseBodyDeployDetails },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployDetails)) {
      $dara.Model.validateArray(this.deployDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

