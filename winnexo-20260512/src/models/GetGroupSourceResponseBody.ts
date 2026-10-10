// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupSourceResponseBody extends $dara.Model {
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
   * The pipeline description.
   * 
   * @example
   * recorder function
   */
  description?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2026-08-26T10:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the resource was last modified, in ISO 8601 format.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
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
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * GROUP
   */
  scope?: string;
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
   * The knowledge base ownership type. Valid values:
   * 
   * - aliding_kb_doc: DingTalk knowledge base document.
   * - normal: Common knowledge.
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The resource tags. This parameter is optional. The value is a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * ["Important","Document"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The type of the resource source. Valid values:
   * 
   * - ExportTaskId: The resource export ID.
   * - TaskId: The module execution task ID.
   * - StatePath: The OSS path where the resource state is stored.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * The resource status. The initial status during the creation process is typically PENDING. If the on_create operation fails, the status is FAILED.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

