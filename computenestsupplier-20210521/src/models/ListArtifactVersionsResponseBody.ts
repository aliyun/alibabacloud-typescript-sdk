// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactVersionsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the deployment package to be built.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2022-10-20T02:19:53Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The distribution result of the image.
   */
  imageDelivery?: { [key: string]: string };
  /**
   * @remarks
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The result file of the security scan.
   * 
   * @example
   * https://compute-nest-security-audit-bucket-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/51416747xxxx/xxxx
   */
  resultFile?: string;
  /**
   * @remarks
   * The result of the security scan. Valid values:
   * 
   * *   Normal: No risks exist on the deployment package.
   * *   AtRisk: Risks exist on the deployment package.
   * *   Processing: The deployment package is being scanned.
   * 
   * @example
   * Normal
   */
  securityAuditResult?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
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
   * The version name of the deployment package.
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
   * The version information about the deployment package.
   */
  artifacts?: ListArtifactVersionsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

