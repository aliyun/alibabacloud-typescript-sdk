// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseVoiceMeetingRequest extends $dara.Model {
  /**
   * @remarks
   * token
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
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The attachment URL in Yida.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the AI assistant.
   * 
   * This parameter is required.
   * 
   * @example
   * Project Review Recording
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee. This is the name of the operating object and is optional.
   * 
   * @example
   * exampleAgent
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The code of the operator.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The resource tags. This parameter is optional and accepts a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * ["Important","Meeting"]
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
      appToken: 'appToken',
      description: 'description',
      directoryId: 'directoryId',
      fileUrl: 'fileUrl',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      description: 'string',
      directoryId: 'string',
      fileUrl: 'string',
      name: 'string',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

