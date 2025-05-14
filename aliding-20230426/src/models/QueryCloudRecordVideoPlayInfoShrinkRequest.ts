// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordVideoPlayInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6139b4xxx
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44444444
   */
  mediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
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

