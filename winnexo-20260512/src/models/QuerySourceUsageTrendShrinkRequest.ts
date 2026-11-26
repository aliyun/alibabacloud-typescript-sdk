// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageTrendShrinkRequest extends $dara.Model {
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
   * The ID of the associated collaboration group, such as cg_101. If you specify this parameter, a group workspace task is created, and the caller must be a valid group member. If you leave this parameter empty, a personal task is created.
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The actual end timestamp of the live stream, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T23:59:59+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * ALL
   */
  eventType?: string;
  /**
   * @remarks
   * The trend aggregation granularity. Valid values: DAY (daily), WEEK (weekly), and MONTH (monthly).
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The IDs of the knowledge base folders.
   * 
   * @example
   * ["kb_9401"]
   */
  knowledgeBaseIdsShrink?: string;
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
   * The role scope type. Valid values:
   * - **ALL_VISIBLE**: All members.
   * - **PART_VISIBLE**: Partial members.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT
   */
  scopeType?: string;
  /**
   * @remarks
   * The IDs of the resource sources.
   * 
   * @example
   * ["src_9401"]
   */
  sourceIdsShrink?: string;
  /**
   * @remarks
   * The resume channel source.
   * 
   * @example
   * Naming content of the source
   */
  sourceName?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-01T00:00:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      endTime: 'endTime',
      eventType: 'eventType',
      granularity: 'granularity',
      knowledgeBaseIdsShrink: 'knowledgeBaseIds',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      scopeType: 'scopeType',
      sourceIdsShrink: 'sourceIds',
      sourceName: 'sourceName',
      startTime: 'startTime',
      tenantId: 'tenantId',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      collaborationGroupId: 'string',
      endTime: 'string',
      eventType: 'string',
      granularity: 'string',
      knowledgeBaseIdsShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      scopeType: 'string',
      sourceIdsShrink: 'string',
      sourceName: 'string',
      startTime: 'string',
      tenantId: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

