// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the artifact.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the artifact.
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
   * The content used to build the artifact. This parameter is used for managed artifact builds.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the artifact build.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the artifact.
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
   * The type of the artifact.
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
   * The description of the artifact.
   * 
   * @example
   * Redhat8_0 image
   */
  description?: string;
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
   * The latest version of the artifact.
   * 
   * @example
   * 2
   */
  maxVersion?: number;
  /**
   * @remarks
   * The name of the artifact.
   * 
   * @example
   * Redhat8_5 image
   */
  name?: string;
  /**
   * @remarks
   * The permission type. This parameter is valid for artifacts of the ContainerImage and HelmChart types. Valid values:
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
   * The distribution progress of the artifact.
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
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzmhzoaa****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the artifact.
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
   * The IDs of the regions where the artifact is supported.
   * 
   * @example
   * ["cn-hangzhou","cn-beijing"]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The tags of the artifact.
   */
  tags?: GetArtifactResponseBodyTags[];
  /**
   * @remarks
   * The version name of the artifact.
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

