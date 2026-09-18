// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupPublicUrlRequest extends $dara.Model {
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
   * The folder ID.
   * 
   * @example
   * dir_tenant_kb_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Enterprise Policy
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content. This parameter is optional. The notes participate in auxiliary analysis.
   * 
   * @example
   * Extract applicable scope and key clauses
   */
  notes?: string;
  /**
   * @remarks
   * The name of the digital employee (monitored object name). This parameter is optional.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
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
   * The resource labels. This parameter is optional. Specify a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * ["Important","Meeting"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID that takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      name: 'name',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      originalUrl: 'originalUrl',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
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

