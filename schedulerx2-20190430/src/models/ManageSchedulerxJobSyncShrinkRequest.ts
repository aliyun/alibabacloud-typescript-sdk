// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageSchedulerxJobSyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task IDs.
   * 
   * This parameter is required.
   */
  jobIdListShrink?: string;
  /**
   * @remarks
   * The source of the namespace. Required only for specific third-party cases.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The source application group to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  originalGroupId?: string;
  /**
   * @remarks
   * The source namespace where the task resides.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  originalNamespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination application group to which the task will be synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * testSyncJobGroup
   */
  targetGroupId?: string;
  /**
   * @remarks
   * The destination namespace to which the task will be synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * 5f56ef65-b836-493d-b40b-c4db6425****
   */
  targetNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      jobIdListShrink: 'JobIdList',
      namespaceSource: 'NamespaceSource',
      originalGroupId: 'OriginalGroupId',
      originalNamespace: 'OriginalNamespace',
      regionId: 'RegionId',
      targetGroupId: 'TargetGroupId',
      targetNamespace: 'TargetNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIdListShrink: 'string',
      namespaceSource: 'string',
      originalGroupId: 'string',
      originalNamespace: 'string',
      regionId: 'string',
      targetGroupId: 'string',
      targetNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

