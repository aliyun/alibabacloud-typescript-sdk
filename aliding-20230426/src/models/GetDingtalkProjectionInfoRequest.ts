// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkProjectionInfoRequestTenantContext extends $dara.Model {
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

export class GetDingtalkProjectionInfoRequest extends $dara.Model {
  tenantContext?: GetDingtalkProjectionInfoRequestTenantContext;
  /**
   * @example
   * web
   */
  client?: string;
  /**
   * @example
   * 1640998800000
   */
  endTs?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * 342342
   */
  pubWorkNo?: string;
  /**
   * @example
   * room001
   */
  roomId?: string;
  /**
   * @example
   * 1640995200000
   */
  startTs?: number;
  /**
   * @example
   * user456
   */
  subUid?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      client: 'client',
      endTs: 'endTs',
      orgId: 'orgId',
      pubWorkNo: 'pubWorkNo',
      roomId: 'roomId',
      startTs: 'startTs',
      subUid: 'subUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkProjectionInfoRequestTenantContext,
      client: 'string',
      endTs: 'number',
      orgId: 'string',
      pubWorkNo: 'string',
      roomId: 'string',
      startTs: 'number',
      subUid: 'string',
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

