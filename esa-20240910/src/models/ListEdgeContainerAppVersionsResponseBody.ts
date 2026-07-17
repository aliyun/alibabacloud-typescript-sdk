// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The command executed by the probe.
   * 
   * @example
   * openresty -g  "daemon off;
   */
  command?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks for the container.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The domain name for the container health check.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers carried in the container health check.
   * 
   * @example
   * {\\"Content-Type\\":\\"application/json\\"}
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The initial delay time of the container probe. Unit: seconds. For example, 5 indicates that this parameter is set to five seconds.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The path for the container health check.
   * 
   * @example
   * /health_check
   */
  path?: string;
  /**
   * @remarks
   * The interval of the container health check. Unit: seconds. For example, 5 indicates that this parameter is set to five seconds.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The port for the container health check.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The request protocol for the container health check.
   * 
   * @example
   * http
   */
  scheme?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for the container.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period of the container health check. Unit: seconds. For example, 5 indicates that this parameter is set to five seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      failureThreshold: 'FailureThreshold',
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      initialDelaySeconds: 'InitialDelaySeconds',
      path: 'Path',
      periodSeconds: 'PeriodSeconds',
      port: 'Port',
      scheme: 'Scheme',
      successThreshold: 'SuccessThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      failureThreshold: 'number',
      host: 'string',
      httpHeaders: 'string',
      initialDelaySeconds: 'number',
      path: 'string',
      periodSeconds: 'number',
      port: 'number',
      scheme: 'string',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBodyVersionsContainers extends $dara.Model {
  /**
   * @remarks
   * The container startup arguments.
   * 
   * @example
   * -c a=1
   */
  args?: string;
  /**
   * @remarks
   * The container startup command.
   * 
   * @example
   * openresty -g \\"daemon off;\\"
   */
  command?: string;
  /**
   * @remarks
   * The container environment variables.
   * 
   * @example
   * ENV=prod
   */
  envVariables?: string;
  /**
   * @remarks
   * The container image address.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * container1
   */
  name?: string;
  /**
   * @remarks
   * The command executed after the container starts.
   * 
   * @example
   * sh poststart.sh "echo hello world"
   */
  postStart?: string;
  /**
   * @remarks
   * The command executed before the container stops.
   * 
   * @example
   * sh prestop.sh "echo hello world"
   */
  preStop?: string;
  /**
   * @remarks
   * The container probe configuration object.
   */
  probeContent?: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent;
  /**
   * @remarks
   * The container probe type.
   * 
   * @example
   * httpGet
   */
  probeType?: string;
  /**
   * @remarks
   * The container specifications.
   * 
   * @example
   * 1C2G
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      envVariables: 'EnvVariables',
      image: 'Image',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      probeContent: 'ProbeContent',
      probeType: 'ProbeType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent,
      probeType: 'string',
      spec: 'string',
    };
  }

  validate() {
    if(this.probeContent && typeof (this.probeContent as any).validate === 'function') {
      (this.probeContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The application ID to which the version belongs.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The array of containers included in this version.
   */
  containers?: ListEdgeContainerAppVersionsResponseBodyVersionsContainers[];
  /**
   * @remarks
   * The version creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-10T02:53:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The last publish time of this version. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-10T02:48:36Z
   */
  lastPublishTime?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * version01
   */
  name?: string;
  /**
   * @remarks
   * The current publish time of the version. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-10T02:48:36Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test version
   */
  remarks?: string;
  /**
   * @remarks
   * The status of the current version. Valid values:
   * 
   * - **created**: Created.
   * - **failed**: Failed.
   * - **creating**: Creating.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The last modification time of the version. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-16 10:51:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * ver-87962637161651****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      createTime: 'CreateTime',
      lastPublishTime: 'LastPublishTime',
      name: 'Name',
      publishTime: 'PublishTime',
      remarks: 'Remarks',
      status: 'Status',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': ListEdgeContainerAppVersionsResponseBodyVersionsContainers },
      createTime: 'string',
      lastPublishTime: 'string',
      name: 'string',
      publishTime: 'string',
      remarks: 'string',
      status: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The version list.
   */
  versions?: ListEdgeContainerAppVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListEdgeContainerAppVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

