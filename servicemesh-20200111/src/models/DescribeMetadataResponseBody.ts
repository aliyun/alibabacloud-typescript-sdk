// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetadataResponseBodyMetaDataPlaygroundScene extends $dara.Model {
  /**
   * @remarks
   * The observability scenarios.
   */
  observability?: string[];
  /**
   * @remarks
   * Other scenarios.
   */
  other?: string[];
  /**
   * @remarks
   * The security scenarios.
   */
  security?: string[];
  /**
   * @remarks
   * The traffic management scenarios.
   */
  trafficManagement?: string[];
  static names(): { [key: string]: string } {
    return {
      observability: 'observability',
      other: 'other',
      security: 'security',
      trafficManagement: 'trafficManagement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observability: { 'type': 'array', 'itemType': 'string' },
      other: { 'type': 'array', 'itemType': 'string' },
      security: { 'type': 'array', 'itemType': 'string' },
      trafficManagement: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.observability)) {
      $dara.Model.validateArray(this.observability);
    }
    if(Array.isArray(this.other)) {
      $dara.Model.validateArray(this.other);
    }
    if(Array.isArray(this.security)) {
      $dara.Model.validateArray(this.security);
    }
    if(Array.isArray(this.trafficManagement)) {
      $dara.Model.validateArray(this.trafficManagement);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBodyMetaDataProEdition extends $dara.Model {
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * v1.14.3.87-g96cf7305-aliyun
   */
  currentVersion?: string;
  /**
   * @remarks
   * The CRDs of all ASM versions.
   */
  versionCrds?: { [key: string]: any }[];
  /**
   * @remarks
   * The Istio versions corresponding to the ASM versions.
   */
  versionRegistry?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of ASM versions.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      versionCrds: 'VersionCrds',
      versionRegistry: 'VersionRegistry',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      versionCrds: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versionRegistry: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionCrds)) {
      $dara.Model.validateArray(this.versionCrds);
    }
    if(Array.isArray(this.versionRegistry)) {
      $dara.Model.validateArray(this.versionRegistry);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBodyMetaData extends $dara.Model {
  /**
   * @remarks
   * The Kubernetes versions compatible with ASM.
   */
  compatibilityInfoList?: { [key: string]: any }[];
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * v1.14.3.87-g96cf7305-aliyun
   */
  currentVersion?: string;
  /**
   * @remarks
   * The data of the ASM Playground.
   */
  playgroundScene?: DescribeMetadataResponseBodyMetaDataPlaygroundScene;
  /**
   * @remarks
   * The version information about ASM of a commercial edition.
   */
  proEdition?: DescribeMetadataResponseBodyMetaDataProEdition;
  /**
   * @remarks
   * The regions where ASM instances can be created.
   */
  regions?: string[];
  /**
   * @remarks
   * The custom resource definitions (CRDs) of all ASM versions.
   */
  versionCrds?: { [key: string]: any }[];
  /**
   * @remarks
   * The Istio versions corresponding to the ASM versions.
   */
  versionRegistry?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of ASM versions.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      compatibilityInfoList: 'CompatibilityInfoList',
      currentVersion: 'CurrentVersion',
      playgroundScene: 'PlaygroundScene',
      proEdition: 'ProEdition',
      regions: 'Regions',
      versionCrds: 'VersionCrds',
      versionRegistry: 'VersionRegistry',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibilityInfoList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      currentVersion: 'string',
      playgroundScene: DescribeMetadataResponseBodyMetaDataPlaygroundScene,
      proEdition: DescribeMetadataResponseBodyMetaDataProEdition,
      regions: { 'type': 'array', 'itemType': 'string' },
      versionCrds: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versionRegistry: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compatibilityInfoList)) {
      $dara.Model.validateArray(this.compatibilityInfoList);
    }
    if(this.playgroundScene && typeof (this.playgroundScene as any).validate === 'function') {
      (this.playgroundScene as any).validate();
    }
    if(this.proEdition && typeof (this.proEdition as any).validate === 'function') {
      (this.proEdition as any).validate();
    }
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(Array.isArray(this.versionCrds)) {
      $dara.Model.validateArray(this.versionCrds);
    }
    if(Array.isArray(this.versionRegistry)) {
      $dara.Model.validateArray(this.versionRegistry);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ASM metadata, including the basic information about ASM.
   */
  metaData?: DescribeMetadataResponseBodyMetaData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F93DDAD7-6E04-5AC3-86F4-852708******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: DescribeMetadataResponseBodyMetaData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

