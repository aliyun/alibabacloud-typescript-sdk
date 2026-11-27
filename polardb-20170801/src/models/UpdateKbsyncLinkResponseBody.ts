// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization link.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the current configuration, which does not indicate that the synchronization is complete. This parameter may not be returned if it is not set.
   * 
   * @example
   * SELECTED
   */
  selectionMode?: string;
  /**
   * @remarks
   * Returns the current configuration, which does not indicate that the synchronization is complete. This parameter may not be returned if it is not set.
   */
  selectionRules?: string;
  /**
   * @remarks
   * The scheduled time of the synchronization task.
   */
  syncSchedule?: string;
  /**
   * @remarks
   * The ID of the asynchronous configuration task.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      linkId: 'LinkId',
      requestId: 'RequestId',
      selectionMode: 'SelectionMode',
      selectionRules: 'SelectionRules',
      syncSchedule: 'SyncSchedule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkId: 'string',
      requestId: 'string',
      selectionMode: 'string',
      selectionRules: 'string',
      syncSchedule: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

