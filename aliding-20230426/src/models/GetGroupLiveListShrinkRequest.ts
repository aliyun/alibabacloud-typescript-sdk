// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupLiveListShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      openConversationId: 'OpenConversationId',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      openConversationId: 'string',
      startTime: 'number',
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

