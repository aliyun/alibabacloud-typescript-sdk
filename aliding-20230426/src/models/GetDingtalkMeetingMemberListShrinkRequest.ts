// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMemberListShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * cluster-1
   */
  clusterName?: string;
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
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      clusterName: 'clusterName',
      conferenceId: 'conferenceId',
      currentPage: 'currentPage',
      orgId: 'orgId',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      clusterName: 'string',
      conferenceId: 'string',
      currentPage: 'number',
      orgId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

