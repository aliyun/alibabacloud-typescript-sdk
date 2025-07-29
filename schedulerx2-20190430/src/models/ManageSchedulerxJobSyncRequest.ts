// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageSchedulerxJobSyncRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobIdList?: number[];
  /**
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  originalGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  originalNamespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSyncJobGroup
   */
  targetGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5f56ef65-b836-493d-b40b-c4db6425****
   */
  targetNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      jobIdList: 'JobIdList',
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
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespaceSource: 'string',
      originalGroupId: 'string',
      originalNamespace: 'string',
      regionId: 'string',
      targetGroupId: 'string',
      targetNamespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIdList)) {
      $dara.Model.validateArray(this.jobIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

