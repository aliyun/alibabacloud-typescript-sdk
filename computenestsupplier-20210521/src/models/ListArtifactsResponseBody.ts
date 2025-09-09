// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsResponseBodyArtifactsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * {\\"CodeRepo\\":{\\"Owner\\":\\"wenle\\",\\"Platform\\":\\"github\\",\\"Branch\\":\\"main\\",\\"RepoName\\":\\"aliyun-computenest/java-springboot-demo\\"}}
   */
  artifactBuildProperty?: string;
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
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
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
   * The latest version of the deployment package.
   * 
   * @example
   * 2
   */
  maxVersion?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Permission fields are applicable to container image artifact and Helm Chart artifact They can only change from Automatic to Public. Options:
   * - Public
   * - Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25rexxxxxxxx
   */
  resourceGroupId?: string;
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
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListArtifactsResponseBodyArtifactsTags[];
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      permissionType: 'PermissionType',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactId: 'string',
      artifactType: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'string',
      name: 'string',
      permissionType: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifactsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about deployment packages.
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
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
      artifacts: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifacts },
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

