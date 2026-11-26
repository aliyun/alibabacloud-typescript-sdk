// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentIndexRealTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: integers greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of department IDs.
   */
  depIds?: number[];
  /**
   * @remarks
   * The list of skill group IDs.
   */
  groupIds?: number[];
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance. You can obtain the instance ID in the <b>Instances</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: integers greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

