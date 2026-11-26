// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseSmartIndexConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application credential. Pass this parameter when using the application proxy mode, and specify the operator by using opsUserId or opsUserCode based on the application configuration. Do not use real credentials in logs or public examples.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The automatic execution schedule. Use a five-part cron expression where the minute field must be 0. For example, 0 2 * * * indicates execution at 02:00 every day based on the timezone. Omitting this parameter, setting it to null, or using a blank string indicates manual execution and clears the old automatic schedule, but does not disable the smart index. Maximum length: 100 characters.
   * 
   * @example
   * 0 2 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The business ID of the root directory for the standard enterprise knowledge base of the current tenant. You can obtain this ID from the response of the CreateTenantDirectory operation. You cannot use the internal primary key of the directory, or the IDs of personal spaces, group knowledge bases, subdirectories, or special knowledge bases.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to enable the LLM Wiki smart index. Valid values:
   * - true: Enabled. Switching from disabled to enabled creates an asynchronous full build task and a bill.
   * - false: Disabled. If artifacts exist, asynchronous cleanup is initiated.
   * You cannot toggle the switch during task execution, and you cannot re-enable it until cleanup is complete.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The revision obtained from the most recent configuration read. This value must be a non-negative integer. The value is 0 when not configured, and increments by 1 after a successful save. If the version does not match, ERR.SmartIndex.Conflict is returned. You must read the configuration again before saving. This field is not an idempotency key.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  expectedRevision?: number;
  /**
   * @remarks
   * The unique code of the proxied user within the tenant. This parameter is used only when the identity mapping mode of the application credential is source_uid. You cannot use this parameter to bypass tenant or knowledge base permission verification.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the proxied WINNEXO platform user. This parameter is used only when the identity mapping mode of the application credential is winnexo_uid. You cannot use this parameter to bypass tenant or knowledge base permission verification.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The ID of the target tenant. This parameter is used for tenant routing in public requests. The server-side authentication chain verifies access permissions based on this parameter. You cannot use this parameter to access unauthorized tenants.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The IANA time zone name used for the execution schedule. Default value: Asia/Shanghai. If this parameter is omitted, set to null, or left as a blank string, the default value is used. The length of a non-empty value must be 1 to 64 characters.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      cronExpression: 'cronExpression',
      directoryId: 'directoryId',
      enabled: 'enabled',
      expectedRevision: 'expectedRevision',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      cronExpression: 'string',
      directoryId: 'string',
      enabled: 'boolean',
      expectedRevision: 'number',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

