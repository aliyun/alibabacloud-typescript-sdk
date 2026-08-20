// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseTextRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the alias.
   * 
   * @example
   * InterviewMaster operations and health check service
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * KL_tongyici
   */
  name?: string;
  /**
   * @remarks
   * The name of the operating object.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The source tags.
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
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The message content for text messages.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  textContent?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      knowledgeId: 'knowledgeId',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      textContent: 'textContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      knowledgeId: 'string',
      name: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      textContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

