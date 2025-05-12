// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crr-iql7jalx4g0****
   */
  repoId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  targetRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  targetTag?: string;
  /**
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

