// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReleaseVersionsResponseBodyReleaseVersions extends $dara.Model {
  /**
   * @remarks
   * The IaaS type.
   * 
   * @example
   * ECS
   */
  iaasType?: string;
  /**
   * @remarks
   * The EMR version.
   * 
   * @example
   * EMR-5.3.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The version series.
   * 
   * @example
   * EMR-6.X
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      iaasType: 'IaasType',
      releaseVersion: 'ReleaseVersion',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iaasType: 'string',
      releaseVersion: 'string',
      series: 'string',
    };
  }

  validate() {
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
   * Returns the location of the data that was read.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The major EMR versions.
   */
  releaseVersions?: ListReleaseVersionsResponseBodyReleaseVersions[];
  /**
   * @remarks
   * The ID of the request.
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      releaseVersions: 'ReleaseVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
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

