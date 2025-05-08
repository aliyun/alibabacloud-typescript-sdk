// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateArtifactRequestArtifactBuildProperty } from "./CreateArtifactRequestArtifactBuildProperty";
import { CreateArtifactRequestArtifactProperty } from "./CreateArtifactRequestArtifactProperty";
import { CreateArtifactRequestTag } from "./CreateArtifactRequestTag";


export class CreateArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildProperty?: CreateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The type of the artifact build task. Valid values:
   * 
   * - EcsImage: Build ECS (Elastic Container Service) image.
   * 
   * - Dockerfile: Build container image based on Dockerfile.
   * 
   * - Buildpacks: Build container image based on Buildpacks.
   * 
   * - ContainerImage: Rebuild container image by renaming an existing container image.
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
   */
  artifactProperty?: CreateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   EcsImage: Elastic Compute Service (ECS) image.
   * *   AcrImage: container image.
   * *   File: Object Storage Service (OSS) object.
   * *   Script: script.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
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
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  name?: string;
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
   * The supported regions.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactRequestTag[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
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
      artifactBuildProperty: CreateArtifactRequestArtifactBuildProperty,
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: CreateArtifactRequestArtifactProperty,
      artifactType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactRequestTag },
      versionName: 'string',
    };
  }

  validate() {
    if(this.artifactBuildProperty && typeof (this.artifactBuildProperty as any).validate === 'function') {
      (this.artifactBuildProperty as any).validate();
    }
    if(this.artifactProperty && typeof (this.artifactProperty as any).validate === 'function') {
      (this.artifactProperty as any).validate();
    }
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

