// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactResponseBody extends $dara.Model {
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
   * The properties of the deployment object.
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
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-11-11T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 1
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
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The status of the deployment package.
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
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the deployment package.
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

