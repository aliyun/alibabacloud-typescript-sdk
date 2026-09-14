// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReleaseVersionsResponseBodyReleaseVersions extends $dara.Model {
  /**
   * @remarks
   * The community Spark version number.
   * 
   * @example
   * Spark 3.3.1
   */
  communityVersion?: string;
  /**
   * @remarks
   * The list of CPU architectures.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * Indicates whether Fusion engine acceleration is enabled.
   * 
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1716215854101
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The IaaS layer type.
   * 
   * @example
   * ASI
   */
  iaasType?: string;
  /**
   * @remarks
   * Indicates whether the version is a custom image.
   */
  isCustom?: boolean;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The Scala version.
   * 
   * @example
   * 2.12
   */
  scalaVersion?: string;
  /**
   * @remarks
   * The version status.
   * 
   * @example
   * ONLINE
   */
  state?: string;
  /**
   * @remarks
   * The version type.
   * 
   * @example
   * stable
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      communityVersion: 'communityVersion',
      cpuArchitectures: 'cpuArchitectures',
      displayReleaseVersion: 'displayReleaseVersion',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      iaasType: 'iaasType',
      isCustom: 'isCustom',
      releaseVersion: 'releaseVersion',
      scalaVersion: 'scalaVersion',
      state: 'state',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communityVersion: 'string',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      displayReleaseVersion: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      iaasType: 'string',
      isCustom: 'boolean',
      releaseVersion: 'string',
      scalaVersion: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cpuArchitectures)) {
      $dara.Model.validateArray(this.cpuArchitectures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of versions.
   */
  releaseVersions?: ListReleaseVersionsResponseBodyReleaseVersions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      releaseVersions: 'releaseVersions',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      releaseVersions: { 'type': 'array', 'itemType': ListReleaseVersionsResponseBodyReleaseVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.releaseVersions)) {
      $dara.Model.validateArray(this.releaseVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

