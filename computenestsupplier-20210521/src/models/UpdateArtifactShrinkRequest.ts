// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildPropertyShrink?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * Permission fields are applicable to container image artifact and Helm Chart artifact. They can only change from Automatic to Public. Options:
   * 
   * Public
   * 
   * Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
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
      artifactBuildPropertyShrink: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      clientToken: 'ClientToken',
      description: 'Description',
      permissionType: 'PermissionType',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildPropertyShrink: 'string',
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      clientToken: 'string',
      description: 'string',
      permissionType: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

