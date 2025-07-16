// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryPlanRequestTenantContext extends $dara.Model {
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

export class CreateDeliveryPlanRequest extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @example
   * 1699265024987
   */
  endTime?: number;
  /**
   * @example
   * 1028
   */
  resId?: string;
  /**
   * @example
   * 1699265024987
   */
  startTime?: number;
  tenantContext?: CreateDeliveryPlanRequestTenantContext;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      resId: 'ResId',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'number',
      resId: 'string',
      startTime: 'number',
      tenantContext: CreateDeliveryPlanRequestTenantContext,
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

