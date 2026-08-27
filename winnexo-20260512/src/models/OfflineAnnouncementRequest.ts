// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineAnnouncementRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the announcement.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  announcementId?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      announcementId: 'announcementId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcementId: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

