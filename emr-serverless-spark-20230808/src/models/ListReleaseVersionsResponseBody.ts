// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReleaseVersionsResponseBodyReleaseVersions extends $dara.Model {
  /**
   * @remarks
   * The version number of open source Spark.
   * 
   * @example
   * Spark 3.3.1
   */
  communityVersion?: string;
  /**
   * @remarks
   * The CPU architectures.
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
   * Indicates whether the Fusion engine is used for acceleration.
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
   * The type of the Infrastructure as a Service (IaaS) layer.
   * 
   * @example
   * ASI
   */
  iaasType?: string;
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
   * The version of Scala.
   * 
   * @example
   * 2.12
   */
  scalaVersion?: string;
  /**
   * @remarks
   * The status of the version.
   * 
   * @example
   * ONLINE
   */
  state?: string;
  /**
   * @remarks
   * The type of the version.
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
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The versions.
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
   * The total number of entries returned.
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

