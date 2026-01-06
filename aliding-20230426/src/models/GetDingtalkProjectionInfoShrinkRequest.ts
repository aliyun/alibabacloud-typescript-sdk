// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkProjectionInfoShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
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
      tenantContextShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

