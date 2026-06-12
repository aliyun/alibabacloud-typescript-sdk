// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactVersionsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The content used to build the artifact. This parameter is used for managed artifact builds.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The artifact build type.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the artifact.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005****\\",\\"CommodityVersion\\":\\"V2022****\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The time when the artifact was created.
   * 
   * @example
   * 2022-10-20T02:19:53Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the artifact was last modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The result of the image distribution.
   */
  imageDelivery?: { [key: string]: string };
  /**
   * @remarks
   * The distribution progress of the artifact.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The file that contains the security scan results.
   * 
   * @example
   * 仅当安全扫描结果的返回值为AtRisk时才会展示。
   */
  resultFile?: string;
  /**
   * @remarks
   * The security scan result.
   * 
   * Valid values:
   * 
   * - Normal: The artifact is normal and has no threats.
   * 
   * - AtRisk: The artifact has security threats.
   * 
   * - Processing: The security scan is in progress.
   * 
   * @example
   * Normal
   */
  securityAuditResult?: string;
  /**
   * @remarks
   * The status of the artifact.
   * 
   * Valid values:
   * 
   * - Created: The artifact is created.
   * 
   * - Scanning: The artifact is being scanned.
   * 
   * - ScanFailed: The artifact failed to be scanned.
   * 
   * - Delivering: The artifact is being distributed.
   * 
   * - Available: The artifact is available.
   * 
   * - Deleted: The artifact is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The description of the artifact status.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The IDs of the regions to which the artifact is distributed.
   * 
   * @example
   * [
   * 					"cn-beijing",
   * 					"cn-hangzhou",
   * 					"cn-shanghai"
   * 				]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the artifact version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageDelivery: 'ImageDelivery',
      progress: 'Progress',
      resultFile: 'ResultFile',
      securityAuditResult: 'SecurityAuditResult',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageDelivery: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      progress: 'string',
      resultFile: 'string',
      securityAuditResult: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.imageDelivery) {
      $dara.Model.validateMap(this.imageDelivery);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the artifact versions.
   */
  artifacts?: ListArtifactVersionsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries returned per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If the results are not complete, this token is returned. To retrieve the next page of results, include this token in the next request.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hR****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the query criteria.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactVersionsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

