// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppStatusResponseBodyAppStatusRegions extends $dara.Model {
  region?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppStatusResponseBodyAppStatus extends $dara.Model {
  /**
   * @remarks
   * The baseline version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  baseLineVersion?: string;
  /**
   * @remarks
   * The deployment status of the application. Valid values:
   * - **undeploy**: Not deployed.
   * - **deploying**: Being deployed.
   * - **deployed**: Deployed.
   * - **undeploying**: Being undeployed.
   * 
   * @example
   * undeploy
   */
  deployStatus?: string;
  /**
   * @remarks
   * The deployment time of the application. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  deployTime?: string;
  /**
   * @remarks
   * The deployed version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  deployedVersion?: string;
  /**
   * @remarks
   * The expected publishing percentage of the application.
   * 
   * @example
   * 50%
   */
  expectPercentage?: number;
  /**
   * @remarks
   * Indicates whether the application is fully released. This field takes effect only when PublishType is set to region.
   * 
   * @example
   * true
   */
  fullRelease?: boolean;
  /**
   * @remarks
   * The publishing environment. Valid values:
   * 
   * - **prod**: Production environment.
   * - **staging**: Staging environment.
   * 
   * @example
   * prod
   */
  publishEnv?: string;
  /**
   * @remarks
   * The publishing percentage of the application.
   * 
   * @example
   * 50%
   */
  publishPercentage?: number;
  /**
   * @remarks
   * The publishing status of the application. Valid values:
   * - **publishing**: Being published.
   * - **published**: Published.
   * - **rollbacking**: Being rolled back.
   * - **rollbacked**: Rolled back.
   * 
   * @example
   * pubishing
   */
  publishStatus?: string;
  /**
   * @remarks
   * The publishing time of the application. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The publishing type. Valid values:
   * 
   * - **percentage**: Publish by percentage.
   * 
   * - **region**: Publish by region.
   * 
   * If this parameter is not specified, the default value percentage is used.
   * 
   * @example
   * percentage
   */
  publishType?: string;
  /**
   * @remarks
   * The publishing version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  publishingVersion?: string;
  regions?: GetEdgeContainerAppStatusResponseBodyAppStatusRegions;
  /**
   * @remarks
   * The most recent rollback time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  rollbackTime?: string;
  /**
   * @remarks
   * The undeployment time of the application. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  unDeployTime?: string;
  static names(): { [key: string]: string } {
    return {
      baseLineVersion: 'BaseLineVersion',
      deployStatus: 'DeployStatus',
      deployTime: 'DeployTime',
      deployedVersion: 'DeployedVersion',
      expectPercentage: 'ExpectPercentage',
      fullRelease: 'FullRelease',
      publishEnv: 'PublishEnv',
      publishPercentage: 'PublishPercentage',
      publishStatus: 'PublishStatus',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishingVersion: 'PublishingVersion',
      regions: 'Regions',
      rollbackTime: 'RollbackTime',
      unDeployTime: 'UnDeployTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseLineVersion: 'string',
      deployStatus: 'string',
      deployTime: 'string',
      deployedVersion: 'string',
      expectPercentage: 'number',
      fullRelease: 'boolean',
      publishEnv: 'string',
      publishPercentage: 'number',
      publishStatus: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishingVersion: 'string',
      regions: GetEdgeContainerAppStatusResponseBodyAppStatusRegions,
      rollbackTime: 'string',
      unDeployTime: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that describes the application status information.
   */
  appStatus?: GetEdgeContainerAppStatusResponseBodyAppStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: GetEdgeContainerAppStatusResponseBodyAppStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appStatus && typeof (this.appStatus as any).validate === 'function') {
      (this.appStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

