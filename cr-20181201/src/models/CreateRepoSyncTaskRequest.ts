// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The source instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly overwrite existing images. Valid values:
   * 
   * - `true`: Forcibly overwrites existing images.
   * 
   * - `false`: Does not forcibly overwrite existing images.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * The execution priority of the synchronization task. Synchronization tasks are executed in descending order of priority. Tasks with the same priority are executed in random order.
   * 
   * Valid values: 1 to 5.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the image repository in the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-iql7jalx4g0****
   */
  repoId?: string;
  /**
   * @remarks
   * The image tag in the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The namespace of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespace?: string;
  /**
   * @remarks
   * The region ID of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The name of the image repository in the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * The image tag in the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  targetTag?: string;
  /**
   * @remarks
   * The UID of the account to which the target instance belongs.
   * 
   * @example
   * 12345***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      override: 'Override',
      priority: 'Priority',
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
      priority: 'number',
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

