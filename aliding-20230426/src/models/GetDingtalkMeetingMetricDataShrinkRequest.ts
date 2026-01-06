// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMetricDataShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * 1638360000000
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 1638363600000
   */
  endTime?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * audio
   */
  typeName?: string;
  /**
   * @example
   * 123456
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      beginTime: 'beginTime',
      conferenceId: 'conferenceId',
      endTime: 'endTime',
      orgId: 'orgId',
      typeName: 'typeName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      beginTime: 'number',
      conferenceId: 'string',
      endTime: 'number',
      orgId: 'string',
      typeName: 'string',
      workNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

