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
  baseLineVersion?: string;
  deployStatus?: string;
  deployTime?: string;
  deployedVersion?: string;
  expectPercentage?: number;
  fullRelease?: boolean;
  publishEnv?: string;
  publishPercentage?: number;
  publishStatus?: string;
  publishTime?: string;
  publishType?: string;
  publishingVersion?: string;
  regions?: GetEdgeContainerAppStatusResponseBodyAppStatusRegions;
  rollbackTime?: string;
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
  appStatus?: GetEdgeContainerAppStatusResponseBodyAppStatus;
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

