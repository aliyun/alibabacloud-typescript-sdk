// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The probe command.
   * 
   * @example
   * openresty -g  "daemon off;
   */
  command?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required for a container to be considered as unhealthy.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers that are included in the container health check request.
   * 
   * @example
   * {\\"Content-Type\\":\\"application/json\\"}
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The latency for container probe initialization.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The path of the container health check.
   * 
   * @example
   * /health_check
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The port of the container health check.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol that the container health check request uses.
   * 
   * @example
   * http
   */
  scheme?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for a container to be considered as healthy.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period of the container health check.
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
   * The arguments that are passed to the container startup command.
   * 
   * @example
   * -c a=1
   */
  args?: string;
  /**
   * @remarks
   * The command that is used to start the container.
   * 
   * @example
   * openresty -g \\"daemon off;\\"
   */
  command?: string;
  /**
   * @remarks
   * The environment variables of the container.
   * 
   * @example
   * ENV=prod
   */
  envVariables?: string;
  /**
   * @remarks
   * The address of the container image.
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
   * The command that is run before the container is started. Format: `{"exec":{"command":["cat","/etc/group"\\]}}`.
   * 
   * If you want to cancel this configuration, set the parameter value to `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"bash\\",\\"-c\\",\\"cd /home/admin/
   */
  postStart?: string;
  /**
   * @remarks
   * The command that is run before the container is stopped.
   * 
   * @example
   * sh stop.sh
   */
  preStop?: string;
  /**
   * @remarks
   * The container probe content.
   */
  probeContent?: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent;
  /**
   * @remarks
   * The probe type of the container.
   * 
   * @example
   * httpGet
   */
  probeType?: string;
  /**
   * @remarks
   * The compute specification of the container.
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
   * The application ID.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The containers in the version.
   */
  containers?: ListEdgeContainerAppVersionsResponseBodyVersionsContainers[];
  /**
   * @remarks
   * The time when the version was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-10T02:53:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the version was last released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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
   * The time when the version was released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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
   * *   **created**
   * *   **failed**
   * *   **creating**
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The time when the version was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The versions.
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

