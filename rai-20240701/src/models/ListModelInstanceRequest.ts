// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelInstanceRequest extends $dara.Model {
  /**
   * @example
   * rai_content_detection_model
   */
  easServiceName?: string;
  /**
   * @example
   * 1
   */
  isSidecarPolicy?: number;
  /**
   * @example
   * True
   */
  isSupportContentSafe?: number;
  /**
   * @example
   * False
   */
  isSupportPromptAttack?: number;
  /**
   * @example
   * True
   */
  isSupportSensitiveTopic?: number;
  /**
   * @example
   * 1
   */
  modelSource?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceName: 'EasServiceName',
      isSidecarPolicy: 'IsSidecarPolicy',
      isSupportContentSafe: 'IsSupportContentSafe',
      isSupportPromptAttack: 'IsSupportPromptAttack',
      isSupportSensitiveTopic: 'IsSupportSensitiveTopic',
      modelSource: 'ModelSource',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceName: 'string',
      isSidecarPolicy: 'number',
      isSupportContentSafe: 'number',
      isSupportPromptAttack: 'number',
      isSupportSensitiveTopic: 'number',
      modelSource: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

