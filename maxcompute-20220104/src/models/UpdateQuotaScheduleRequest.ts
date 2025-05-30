// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * \\# The quota plan immediately takes effect. [ { "type": "once", "plan": "planA", "operator":"userA" } ] # The quota plan is scheduled on a regular basis. [ { "id": "etl_time", "type": "daily", "condition": { "at": "0800", "after": "2022-04-25T04:23:04Z" // optional }, "plan": "planA" }, { "id": "bi", "type": "daily", "condition": { "at": "0900", "after": "2022-04-25T04:23:04Z" // optional }, "plan": "planB" }, ]
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
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

