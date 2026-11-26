// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupPublicUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is performed as the user identified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * Group collaboration document
   */
  description?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * dir_tenant_kb_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the project group.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Corporate Policy
   */
  name?: string;
  /**
   * @remarks
   * The content of the meeting notes. This parameter is optional and is used for auxiliary analysis.
   * 
   * @example
   * Extract the applicable scope and key terms
   */
  notes?: string;
  /**
   * @remarks
   * The name of the digital employee. This parameter is optional.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The URL of the web page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://mp.weixin.qq.com/s/iHqLKhkJcOyHNCOGejO32A
   */
  originalUrl?: string;
  /**
   * @remarks
   * The resource tags. This parameter is optional. Specify a JSON array of strings, such as ["tagA","tagB"].
   * 
   * @example
   * ["Important", "Meeting"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The ID of the tenant where the operation takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      name: 'name',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      originalUrl: 'originalUrl',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      originalUrl: 'string',
      sourceTags: 'string',
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

