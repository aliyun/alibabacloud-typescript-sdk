// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSecurityScanCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for image security scanning.
   * 
   * @example
   * cdbbe7aa56cbf4b8f830f83718d26****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether the event is handled. Valid values:
   * - **Y**: Handled. 
   * - **N**: Not handled. 
   * - **A**: All.
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The SHA256 value of the image digest.
   * 
   * @example
   * a7978d51f5eddf7612ab15ae46bd4b4257bf59da77c2aafc9d9d8ab41bb3****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * c958b80f-prd_default-9bb0****
   */
  imageTag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 325bfa067ae6c678e59e8a1b34cc****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The ID of the container image repository.
   * 
   * @example
   * 3df5b5a1f2339eb7ebc7d474b8d4****
   */
  repoId?: string;
  /**
   * @remarks
   * The instance ID of the container image.
   * 
   * > Invoke the [DescribeImageInstances](~~DescribeImageInstances~~) operation to obtain this parameter.
   * 
   * @example
   * cri-p2jahwuuwuk7****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The region ID of the container image repository.
   * 
   * @example
   * cn-beijing
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The scan scope.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The instance ID for image security scanning.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dealed: 'Dealed',
      imageDigest: 'ImageDigest',
      imageTag: 'ImageTag',
      imageUuid: 'ImageUuid',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoRegionId: 'RepoRegionId',
      scanRange: 'ScanRange',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dealed: 'string',
      imageDigest: 'string',
      imageTag: 'string',
      imageUuid: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoRegionId: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

