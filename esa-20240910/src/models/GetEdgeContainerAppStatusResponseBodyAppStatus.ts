// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppStatusResponseBodyAppStatusRegions } from "./GetEdgeContainerAppStatusResponseBodyAppStatusRegions";


export class GetEdgeContainerAppStatusResponseBodyAppStatus extends $dara.Model {
  /**
   * @remarks
   * The base version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  baseLineVersion?: string;
  /**
   * @remarks
   * The deployment status of the application.
   * 
   * *   **undeploy**: The application is not deployed.
   * *   **deploying**: The application is being deployed.
   * *   **deployed**: The application is deployed.
   * *   **undeploying**: The deployment is being canceled.
   * 
   * @example
   * undeploy
   */
  deployStatus?: string;
  /**
   * @remarks
   * The time when the application was deployed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  deployTime?: string;
  /**
   * @remarks
   * The release version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  deployedVersion?: string;
  /**
   * @remarks
   * The expected release percentage of the application.
   * 
   * @example
   * 50%
   */
  expectPercentage?: number;
  /**
   * @remarks
   * Specifies whether to fully release the version. This parameter takes effect only when PublishType is set to region.
   * 
   * @example
   * true
   */
  fullRelease?: boolean;
  /**
   * @remarks
   * The environment to which the application was released. Valid values:
   * 
   * *   **prod**: the production environment.
   * *   **staging**: the staging environment.
   * 
   * @example
   * prod
   */
  publishEnv?: string;
  /**
   * @remarks
   * The release percentage of the application.
   * 
   * @example
   * 50%
   */
  publishPercentage?: number;
  /**
   * @remarks
   * The release status of the application. Valid values:
   * 
   * *   **publishing**
   * *   **published**
   * *   **rollbacking**
   * *   **rollbacked**
   * 
   * @example
   * pubishing
   */
  publishStatus?: string;
  /**
   * @remarks
   * The time when the application was released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  publishTime?: string;
  /**
   * @remarks
   * Specifies how the version is released. Valid values:
   * 
   * *   percentage: releases the version by percentage.
   * *   region: releases the version by region.
   * 
   * If you do not specify this parameter, the version is released by percentage by default.
   * 
   * @example
   * percentage
   */
  publishType?: string;
  /**
   * @remarks
   * The release version of the application.
   * 
   * @example
   * ver-123123123123****
   */
  publishingVersion?: string;
  /**
   * @remarks
   * The regions to which the version is released.
   */
  regions?: GetEdgeContainerAppStatusResponseBodyAppStatusRegions;
  /**
   * @remarks
   * The time when the last rollback was performed.
   * 
   * @example
   * 2024-07-25T05:58:05Z
   */
  rollbackTime?: string;
  /**
   * @remarks
   * The time when the application deployment was canceled. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
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

