// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactResponseBody extends $dara.Model {
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
   * The type of the built artifact.
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
   * The content of the artifact.
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
   * The artifact version.
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
   * The time when the artifact was modified.
   * 
   * @example
   * 2022-11-11T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the artifact.
   * 
   * @example
   * 1
   */
  maxVersion?: number;
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
   * The request ID.
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the artifact.
   * 
   * @example
   * Created
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
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
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
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      requestId: 'RequestId',
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
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      requestId: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

