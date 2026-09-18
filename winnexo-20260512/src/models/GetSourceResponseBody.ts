// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceResponseBodyObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The name of the semantic graph to which the object belongs.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item. The value can be a **feedId** or a mini-app ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer. This field has a value when type is set to mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBodyUnstructuredDocs extends $dara.Model {
  /**
   * @remarks
   * The completion time, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  completionTime?: string;
  /**
   * @remarks
   * The file name, including the file name extension.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file record ID (optional). This value corresponds to settings.file_record_id.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The file type. Valid values:
   * - **file**: file.
   * - **folder**: folder.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The session analysis result in OSS URL format. The URL expires after one hour.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  ossUrl?: string;
  /**
   * @remarks
   * The DocumentAgent semantic ID.
   * 
   * @example
   * exampleSemanticsId
   */
  semanticsId?: string;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'completionTime',
      fileName: 'fileName',
      fileRecordId: 'fileRecordId',
      fileType: 'fileType',
      ossUrl: 'ossUrl',
      semanticsId: 'semanticsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'string',
      fileName: 'string',
      fileRecordId: 'string',
      fileType: 'string',
      ossUrl: 'string',
      semanticsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The completion time, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  completionTime?: string;
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
   * The creation time.
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether notes exist.
   * 
   * @example
   * true
   */
  hasNotes?: boolean;
  /**
   * @remarks
   * Indicates whether settings configurations exist.
   * 
   * @example
   * true
   */
  hasSettings?: boolean;
  /**
   * @remarks
   * Indicates whether structured tables exist.
   * 
   * @example
   * true
   */
  hasStructuredTables?: boolean;
  /**
   * @remarks
   * Indicates whether unstructured documents exist.
   * 
   * @example
   * true
   */
  hasUnstructuredDocs?: boolean;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content (optional). The notes are used for auxiliary analysis.
   * 
   * @example
   * string_value
   */
  notes?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: GetSourceResponseBodyObjectBindings[];
  /**
   * @remarks
   * The ID of the associated variable.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer. This field has a value when type is set to mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
   * The task scope.
   * 
   * @example
   * PERSONAL
   */
  scope?: string;
  /**
   * @remarks
   * The user card information settings.
   */
  settings?: { [key: string]: any };
  /**
   * @remarks
   * The skill output ID. This ID is included when the output is saved as a resource.
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The knowledge base (KB) ownership type. Valid values:
   * - aliding_kb_doc: DingTalk knowledge base document.
   * - normal: standard knowledge.
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The resource tags (optional). The value is a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * The final message status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The list of structured tables.
   * 
   * @example
   * string_value
   */
  structuredTables?: string[];
  /**
   * @remarks
   * The unstructured documents.
   */
  unstructuredDocs?: GetSourceResponseBodyUnstructuredDocs[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completionTime: 'completionTime',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasNotes: 'hasNotes',
      hasSettings: 'hasSettings',
      hasStructuredTables: 'hasStructuredTables',
      hasUnstructuredDocs: 'hasUnstructuredDocs',
      message: 'message',
      name: 'name',
      notes: 'notes',
      objectBindings: 'objectBindings',
      objectId: 'objectId',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      requestId: 'requestId',
      scope: 'scope',
      settings: 'settings',
      skillOutputId: 'skillOutputId',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
      structuredTables: 'structuredTables',
      unstructuredDocs: 'unstructuredDocs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completionTime: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasNotes: 'boolean',
      hasSettings: 'boolean',
      hasStructuredTables: 'boolean',
      hasUnstructuredDocs: 'boolean',
      message: 'string',
      name: 'string',
      notes: 'string',
      objectBindings: { 'type': 'array', 'itemType': GetSourceResponseBodyObjectBindings },
      objectId: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      requestId: 'string',
      scope: 'string',
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skillOutputId: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
      sourceType: 'string',
      status: 'string',
      structuredTables: { 'type': 'array', 'itemType': 'string' },
      unstructuredDocs: { 'type': 'array', 'itemType': GetSourceResponseBodyUnstructuredDocs },
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    if(this.settings) {
      $dara.Model.validateMap(this.settings);
    }
    if(Array.isArray(this.structuredTables)) {
      $dara.Model.validateArray(this.structuredTables);
    }
    if(Array.isArray(this.unstructuredDocs)) {
      $dara.Model.validateArray(this.unstructuredDocs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

