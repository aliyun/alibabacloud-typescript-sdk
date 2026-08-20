// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelDeploymentProfilesResponseBodyProfilesDevices extends $dara.Model {
  /**
   * @example
   * NVIDIA
   */
  deviceCategory?: string;
  /**
   * @example
   * NVIDIA_L20C
   */
  deviceType?: string;
  /**
   * @example
   * L20C
   */
  displayName?: string;
  instanceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceCategory: 'DeviceCategory',
      deviceType: 'DeviceType',
      displayName: 'DisplayName',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCategory: 'string',
      deviceType: 'string',
      displayName: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelDeploymentProfilesResponseBodyProfilesMembers extends $dara.Model {
  /**
   * @example
   * Default
   */
  memberType?: string;
  /**
   * @example
   * { "script": "sglang serve --disaggregation-mode decode" }
   */
  meta?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      memberType: 'MemberType',
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberType: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelDeploymentProfilesResponseBodyProfiles extends $dara.Model {
  /**
   * @example
   * singlenode
   */
  category?: string;
  devices?: ListModelDeploymentProfilesResponseBodyProfilesDevices[];
  /**
   * @example
   * sglang
   */
  framework?: string;
  labels?: { [key: string]: string };
  members?: ListModelDeploymentProfilesResponseBodyProfilesMembers[];
  optimizations?: { [key: string]: string };
  /**
   * @example
   * prf_4f73b31ae****23f9a04c6e83ebc78f
   */
  profileId?: string;
  /**
   * @example
   * singlenode-balanced
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      devices: 'Devices',
      framework: 'Framework',
      labels: 'Labels',
      members: 'Members',
      optimizations: 'Optimizations',
      profileId: 'ProfileId',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      devices: { 'type': 'array', 'itemType': ListModelDeploymentProfilesResponseBodyProfilesDevices },
      framework: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      members: { 'type': 'array', 'itemType': ListModelDeploymentProfilesResponseBodyProfilesMembers },
      optimizations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      profileId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(this.optimizations) {
      $dara.Model.validateMap(this.optimizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelDeploymentProfilesResponseBody extends $dara.Model {
  /**
   * @example
   * model-6wiou4ta20tgtq9lda
   */
  modelId?: string;
  /**
   * @example
   * 1.0.0
   */
  modelVersion?: string;
  profiles?: ListModelDeploymentProfilesResponseBodyProfiles[];
  /**
   * @example
   * B6B54325-C98C-5937-87A3-2F96C07652EC
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      profiles: 'Profiles',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelVersion: 'string',
      profiles: { 'type': 'array', 'itemType': ListModelDeploymentProfilesResponseBodyProfiles },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.profiles)) {
      $dara.Model.validateArray(this.profiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

