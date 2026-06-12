// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactShrinkRequestTag extends $dara.Model {
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

export class CreateArtifactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content used to build the artifact. This parameter is used for managed artifact builds.
   */
  artifactBuildPropertyShrink?: string;
  /**
   * @remarks
   * The type of the artifact to be built. Valid values:
   * 
   * - EcsImage: builds an ECS image.
   * 
   * - Dockerfile: builds a container image based on a Dockerfile.
   * 
   * - Buildpacks: builds a container image based on Buildpacks.
   * 
   * - ContainerImage: builds a container image by renaming an existing container image.
   * 
   * @example
   * Dockerflie
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The artifact ID.
   * 
   * This parameter is required to create a new version of an existing artifact.
   * 
   * You can call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation to obtain the artifact ID.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The content of the artifact.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The artifact type.
   * 
   * Valid values:
   * 
   * - EcsImage: an ECS image artifact.
   * 
   * - AcrImage: a container image artifact.
   * 
   * - File: an Object Storage Service (OSS) file artifact.
   * 
   * - Script: a script artifact.
   * 
   * - HelmChart: a Helm chart artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request.
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
   * The artifact name.
   * 
   * This parameter is required.
   * 
   * @example
   * Redhat8_5 image
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm2jfvb7b****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The regions where the image can be distributed.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactShrinkRequestTag[];
  /**
   * @remarks
   * The name of the artifact version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildPropertyShrink: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildPropertyShrink: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      artifactType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactShrinkRequestTag },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

