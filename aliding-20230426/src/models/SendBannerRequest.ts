// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendBannerRequestTenantContext } from "./SendBannerRequestTenantContext";


export class SendBannerRequest extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @example
   * 1693881641000L
   */
  endTime?: number;
  /**
   * @example
   * 1693881641000L
   */
  startTime?: number;
  tenantContext?: SendBannerRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'number',
      startTime: 'number',
      tenantContext: SendBannerRequestTenantContext,
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

