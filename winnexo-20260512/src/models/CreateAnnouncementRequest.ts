// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnouncementRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
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
   * The effective start time in ISO 8601 format with time zone. If this parameter is not specified, the notice takes effect immediately.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  effectiveStart?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The priority. Valid values:
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
  targetRoleCodes?: string[];
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
  targetTenantIds?: number[];
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
      appToken: 'appToken',
      content: 'content',
      displayPage: 'displayPage',
      displayType: 'displayType',
      effectiveEnd: 'effectiveEnd',
      effectiveStart: 'effectiveStart',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      priority: 'priority',
      publishNow: 'publishNow',
      targetRoleCodes: 'targetRoleCodes',
      targetRoleMode: 'targetRoleMode',
      targetTenantIds: 'targetTenantIds',
      targetTenantMode: 'targetTenantMode',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      content: 'string',
      displayPage: 'string',
      displayType: 'string',
      effectiveEnd: 'string',
      effectiveStart: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      priority: 'string',
      publishNow: 'boolean',
      targetRoleCodes: { 'type': 'array', 'itemType': 'string' },
      targetRoleMode: 'string',
      targetTenantIds: { 'type': 'array', 'itemType': 'number' },
      targetTenantMode: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetRoleCodes)) {
      $dara.Model.validateArray(this.targetRoleCodes);
    }
    if(Array.isArray(this.targetTenantIds)) {
      $dara.Model.validateArray(this.targetTenantIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

