// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGroupLiveListRequestTenantContext } from "./GetGroupLiveListRequestTenantContext";


export class GetGroupLiveListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1398324600000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1398324600000
   */
  startTime?: number;
  tenantContext?: GetGroupLiveListRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      openConversationId: 'OpenConversationId',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      openConversationId: 'string',
      startTime: 'number',
      tenantContext: GetGroupLiveListRequestTenantContext,
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

