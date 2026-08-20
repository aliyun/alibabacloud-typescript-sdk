// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseAliDingDocRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the alias.
   * 
   * @example
   * created by eventbridge
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The publicly accessible URL of the AliDing online document.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * Not supported. This parameter is ignored.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * p-toolset-4dd55d81-f98f-4806-8596-43f1c95f1ff0
   */
  name?: string;
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The resource tags (optional, a JSON string list, such as ["tagA","tagB"]).
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      filePublicUrl: 'filePublicUrl',
      knowledgeId: 'knowledgeId',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      knowledgeId: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

