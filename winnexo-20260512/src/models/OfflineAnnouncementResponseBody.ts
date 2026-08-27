// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineAnnouncementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business ID of the announcement.
   * 
   * @example
   * 1001
   */
  announcementId?: number;
  /**
   * @remarks
   * Indicates whether the status was changed.
   * 
   * @example
   * true
   */
  changed?: boolean;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The datasource status after re-parsing.
   * 
   * @example
   * OFFLINE
   */
  status?: string;
  /**
   * @remarks
   * The user who performed the update.
   * 
   * @example
   * 10001
   */
  updatedBy?: number;
  static names(): { [key: string]: string } {
    return {
      announcementId: 'announcementId',
      changed: 'changed',
      code: 'code',
      gmtModified: 'gmtModified',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcementId: 'number',
      changed: 'boolean',
      code: 'string',
      gmtModified: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      updatedBy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

