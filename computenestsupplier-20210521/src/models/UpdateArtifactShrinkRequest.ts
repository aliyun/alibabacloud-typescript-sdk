// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The properties for building the artifact. This is used for managed artifact builds.
   */
  artifactBuildPropertyShrink?: string;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * To obtain the artifact ID, call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the artifact.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request from your client. The **ClientToken** can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The permission type. This parameter is valid for container image artifacts and Helm Chart artifacts. The value can be changed only from \\`Automatic\\` to \\`Public\\`. Valid values:
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
   * The IDs of regions to which the image can be distributed.
   */
  supportRegionIds?: string[];
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

