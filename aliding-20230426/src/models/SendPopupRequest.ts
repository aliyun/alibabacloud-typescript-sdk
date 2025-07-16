// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendPopupRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SendPopupRequest extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @example
   * 1693881641000
   */
  endTime?: number;
  /**
   * @example
   * 1693881641000
   */
  startTime?: number;
  tenantContext?: SendPopupRequestTenantContext;
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
      tenantContext: SendPopupRequestTenantContext,
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

