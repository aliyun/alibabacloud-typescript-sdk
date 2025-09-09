// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the deployment package.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the deployment package.
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

export class GetArtifactResponseBody extends $dara.Model {
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
  maxVersion?: number;
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
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
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
   * ["cn-hangzhou","cn-beijing"]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The tags of the deployment package.
   */
  tags?: GetArtifactResponseBodyTags[];
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
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      permissionType: 'PermissionType',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      tags: 'Tags',
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
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      permissionType: 'string',
      progress: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      tags: { 'type': 'array', 'itemType': GetArtifactResponseBodyTags },
      versionName: 'string',
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

