// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordVideoPlayInfoRequestTenantContext } from "./QueryCloudRecordVideoPlayInfoRequestTenantContext";


export class QueryCloudRecordVideoPlayInfoRequest extends $dara.Model {
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
  tenantContext?: QueryCloudRecordVideoPlayInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      mediaId: 'MediaId',
      regionId: 'RegionId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      mediaId: 'string',
      regionId: 'string',
      tenantContext: QueryCloudRecordVideoPlayInfoRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

