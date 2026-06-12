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
   * The content used to build the artifact. This parameter is used for hosted artifact builds.
   * 
   * @example
   * {\\"CodeRepo\\":{\\"Owner\\":\\"wenle\\",\\"Platform\\":\\"github\\",\\"Branch\\":\\"main\\",\\"RepoName\\":\\"heroku/node-js-getting-started\\"}}
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
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
   * The description of the artifact.
   * 
   * @example
   * Redhat8_0 image
   */
  description?: string;
  /**
   * @remarks
   * The time when the artifact was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 2
   */
  maxVersion?: string;
  /**
   * @remarks
   * The artifact name.
   * 
   * @example
   * Redhat8_5 image
   */
  name?: string;
  /**
   * @remarks
   * The permission field. This parameter is valid for artifacts of the container image, Helm chart, and file types. For other types of artifacts, you can only change the permission from Automatic to Public.
   * Valid values:
   * 
   * - Public
   * 
   * - Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzmhzoaa****
   */
  resourceGroupId?: string;
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
   * The information about the artifacts.
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
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
   * The query token. Set it to the NextToken value returned from the previous API call.
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
   * 7B7AE429-B53E-5E73-A5EC-DC91F614F2D9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
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

