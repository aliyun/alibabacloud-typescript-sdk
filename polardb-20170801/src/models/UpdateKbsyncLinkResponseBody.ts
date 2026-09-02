// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The synchronization link ID.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling time of the synchronization task.
   */
  syncSchedule?: string;
  static names(): { [key: string]: string } {
    return {
      linkId: 'LinkId',
      requestId: 'RequestId',
      syncSchedule: 'SyncSchedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkId: 'string',
      requestId: 'string',
      syncSchedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

