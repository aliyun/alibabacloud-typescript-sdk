// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordVideoPlayInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      mediaId: 'MediaId',
      regionId: 'RegionId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      mediaId: 'string',
      regionId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

