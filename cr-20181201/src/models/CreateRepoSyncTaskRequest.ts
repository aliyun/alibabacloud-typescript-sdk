// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Source instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing image:
   * 
   * - `true`: Overwrite the existing image.
   * 
   * - `false`: Do not overwrite the existing image.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * Image repository ID in the source instance
   * 
   * This parameter is required.
   * 
   * @example
   * crr-iql7jalx4g0****
   */
  repoId?: string;
  /**
   * @remarks
   * Image tag in the source instance
   * 
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @remarks
   * Target instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * Namespace in the target instance
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespace?: string;
  /**
   * @remarks
   * Region ID of the target instance
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  targetRegionId?: string;
  /**
   * @remarks
   * Name of the image repository in the target instance
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * Image tag in the target instance
   * 
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  targetTag?: string;
  /**
   * @remarks
   * UID of the account to which the target instance belongs
   * 
   * @example
   * 12345***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      override: 'Override',
      repoId: 'RepoId',
      tag: 'Tag',
      targetInstanceId: 'TargetInstanceId',
      targetNamespace: 'TargetNamespace',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetTag: 'TargetTag',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      override: 'boolean',
      repoId: 'string',
      tag: 'string',
      targetInstanceId: 'string',
      targetNamespace: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetTag: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

