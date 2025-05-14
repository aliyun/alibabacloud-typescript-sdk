// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      resourceId: 'string',
      startTime: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

