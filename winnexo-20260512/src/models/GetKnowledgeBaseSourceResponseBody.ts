// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
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
   * The full path of the category to which the knowledge item belongs.
   * 
   * @example
   * string_value
   */
  directoryPath?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, that is, the business ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The knowledge base ownership type. Valid values: aliding_kb_doc (DingTalk knowledge base document) and normal (common knowledge).
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The resource tags. This is optional and is a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * The type of the resource source. Valid values:
   * 
   * - ExportTaskId: the resource export ID.
   * 
   * - TaskId: the Module execution task ID.
   * 
   * - StatePath: the OSS path where the resource state is stored.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * The data source status. Valid values:
   * - **1**: online.
   * - **0**: offline.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * string_value
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      directoryPath: 'directoryPath',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
      statusMessage: 'statusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      directoryPath: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
      sourceType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

