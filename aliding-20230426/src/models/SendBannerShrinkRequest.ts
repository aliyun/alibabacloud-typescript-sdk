// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBannerShrinkRequest extends $dara.Model {
  contentShrink?: string;
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      endTime: 'EndTime',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      endTime: 'number',
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

