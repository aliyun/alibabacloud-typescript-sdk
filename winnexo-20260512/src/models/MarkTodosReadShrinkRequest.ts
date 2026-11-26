// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If you specify this parameter, the operation is performed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * Specifies whether to mark all to-do items as read. This parameter takes precedence over todoIds.
   * 
   * @example
   * false
   */
  markAllRead?: boolean;
  /**
   * @remarks
   * The code of the proxy user, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the proxy user, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The list of to-do IDs. You can specify up to 100 IDs. This parameter is ignored when markAllRead is set to true.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of to-do IDs. You can specify up to 100 IDs. This parameter is ignored when markAllRead is set to true.
   * 
   * @example
   * ["todo_abc123","todo_def456"]
   */
  todoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      markAllRead: 'markAllRead',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      todoIdsShrink: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      markAllRead: 'boolean',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      todoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

