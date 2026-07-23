// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsLatestRoutineBuildTask extends $dara.Model {
  /**
   * @remarks
   * The creation time, in ISO 8601 format (UTC), formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-10T02:18:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ER routine name.
   * 
   * @example
   * rwa-test
   */
  routineName?: string;
  /**
   * @remarks
   * The status of the build task. Valid values:
   * 
   * - int: Init.
   * - pending: Pending.
   * - building: Building.
   * - succeed: Succeeded.
   * - failed: Failed.
   * - canceled: Canceled.
   * 
   * @example
   * building
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      routineName: 'RoutineName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      routineName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsRoutineBuildConfiguration extends $dara.Model {
  /**
   * @remarks
   * The Git account name.
   * 
   * @example
   * test
   */
  gitAccountName?: string;
  /**
   * @remarks
   * The Git platform. Valid values: github, gitee, and upload.
   * 
   * @example
   * github
   */
  gitPlatform?: string;
  /**
   * @remarks
   * The production branch name.
   * 
   * @example
   * main
   */
  productionBranch?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * example-test
   */
  repository?: string;
  /**
   * @remarks
   * The ER routine name.
   * 
   * @example
   * rwa-test
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      gitAccountName: 'GitAccountName',
      gitPlatform: 'GitPlatform',
      productionBranch: 'ProductionBranch',
      repository: 'Repository',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gitAccountName: 'string',
      gitPlatform: 'string',
      productionBranch: 'string',
      repository: 'string',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurations extends $dara.Model {
  /**
   * @remarks
   * The latest ER build task information.
   */
  latestRoutineBuildTask?: ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsLatestRoutineBuildTask;
  /**
   * @remarks
   * The ER build configuration information.
   */
  routineBuildConfiguration?: ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsRoutineBuildConfiguration;
  static names(): { [key: string]: string } {
    return {
      latestRoutineBuildTask: 'LatestRoutineBuildTask',
      routineBuildConfiguration: 'RoutineBuildConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestRoutineBuildTask: ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsLatestRoutineBuildTask,
      routineBuildConfiguration: ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurationsRoutineBuildConfiguration,
    };
  }

  validate() {
    if(this.latestRoutineBuildTask && typeof (this.latestRoutineBuildTask as any).validate === 'function') {
      (this.latestRoutineBuildTask as any).validate();
    }
    if(this.routineBuildConfiguration && typeof (this.routineBuildConfiguration as any).validate === 'function') {
      (this.routineBuildConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineBuildConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6abd807e-ed2a-44de-ac54-ac38a62472e6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of ER build configurations.
   */
  routineBuildConfigurations?: ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routineBuildConfigurations: 'RoutineBuildConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routineBuildConfigurations: { 'type': 'array', 'itemType': ListRoutineBuildConfigurationsResponseBodyRoutineBuildConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.routineBuildConfigurations)) {
      $dara.Model.validateArray(this.routineBuildConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

