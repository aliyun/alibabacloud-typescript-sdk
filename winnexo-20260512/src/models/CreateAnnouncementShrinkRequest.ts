// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnouncementShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the notice.
   * 
   * This parameter is required.
   * 
   * @example
   * The system will undergo maintenance tonight
   */
  content?: string;
  /**
   * @remarks
   * The display page. Valid values: ALL, FRONTEND, and BACKEND.
   * 
   * @example
   * ALL
   */
  displayPage?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * LIST
   */
  displayType?: string;
  /**
   * @remarks
   * The effective end time.
   * 
   * @example
   * 2026-08-21T14:00:00+08:00
   */
  effectiveEnd?: string;
  /**
   * @remarks
   * The effective start time in ISO 8601 format with time zone information. If this parameter is not specified, the notice takes effect immediately.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  effectiveStart?: string;
  /**
   * @remarks
   * The priority level. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * GENERAL
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether to publish the notice immediately after creation.
   * 
   * @example
   * false
   */
  publishNow?: boolean;
  /**
   * @remarks
   * The list of system role codes. This parameter is used when targetRoleMode is set to SPECIFIED.
   * 
   * @example
   * ["SYSTEM_ADMIN"]
   */
  targetRoleCodesShrink?: string;
  /**
   * @remarks
   * The target role scope. Valid values: ALL and SPECIFIED.
   * 
   * @example
   * ALL
   */
  targetRoleMode?: string;
  /**
   * @remarks
   * The list of target tenant IDs. This parameter is used when targetTenantMode is set to SPECIFIED.
   * 
   * @example
   * [10000]
   */
  targetTenantIdsShrink?: string;
  /**
   * @remarks
   * The target tenant scope. Valid values: ALL and SPECIFIED.
   * 
   * @example
   * ALL
   */
  targetTenantMode?: string;
  /**
   * @remarks
   * The ID of the tenant for which the notice takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The title of the notice.
   * 
   * This parameter is required.
   * 
   * @example
   * System Maintenance Notification
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      displayPage: 'displayPage',
      displayType: 'displayType',
      effectiveEnd: 'effectiveEnd',
      effectiveStart: 'effectiveStart',
      priority: 'priority',
      publishNow: 'publishNow',
      targetRoleCodesShrink: 'targetRoleCodes',
      targetRoleMode: 'targetRoleMode',
      targetTenantIdsShrink: 'targetTenantIds',
      targetTenantMode: 'targetTenantMode',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      displayPage: 'string',
      displayType: 'string',
      effectiveEnd: 'string',
      effectiveStart: 'string',
      priority: 'string',
      publishNow: 'boolean',
      targetRoleCodesShrink: 'string',
      targetRoleMode: 'string',
      targetTenantIdsShrink: 'string',
      targetTenantMode: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

