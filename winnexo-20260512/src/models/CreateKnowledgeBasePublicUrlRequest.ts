// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBasePublicUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The resource description.
   * 
   * @example
   * Project design document
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination folder in the enterprise knowledge base. This parameter is required. You must have knowledge base management permissions on the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * dir_tenant_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The resource name. If not specified, the URL is used.
   * 
   * @example
   * Project Plan
   */
  name?: string;
  /**
   * @remarks
   * The analysis instruction.
   * 
   * @example
   * Extract decisions and to-do items
   */
  notes?: string;
  /**
   * @remarks
   * The name of the operating object.
   * 
   * @example
   * R&D Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The URL of the public HTTP/HTTPS web page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com
   */
  originalUrl?: string;
  /**
   * @remarks
   * The list of resource tags as JSON strings.
   * 
   * @example
   * ["R&D"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
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

