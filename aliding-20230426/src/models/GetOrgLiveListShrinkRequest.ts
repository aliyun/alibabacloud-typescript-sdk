// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgLiveListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db4d318xxxxx
   */
  corpId?: string;
  /**
   * @example
   * 1720211800000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1719211800000
   */
  startTime?: number;
  tenantContextShrink?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      tenantContextShrink: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

