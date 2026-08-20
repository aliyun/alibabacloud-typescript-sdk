// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  createdTime?: string;
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
   * The execution mode, such as CODE_AGENT or SYSTEM.
   * 
   * @example
   * string_value
   */
  executeMode?: string;
  /**
   * @remarks
   * Indicates whether the skill is globally accessible.
   * 
   * @example
   * true
   */
  globalAccess?: boolean;
  /**
   * @remarks
   * Indicates whether unpublished draft modifications exist.
   * 
   * @example
   * true
   */
  hasDraftChanges?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The actual skill code for execution.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The skill definition ID.
   * 
   * @example
   * 1
   */
  skillHubDefinitionId?: number;
  /**
   * @remarks
   * The data source type. Fixed value: FILE.
   * 
   * @example
   * BUILTIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The task status. Returns Running upon submission.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The keys.
   * 
   * @example
   * string_value
   */
  tags?: string[];
  /**
   * @remarks
   * The update timestamp, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  updatedTime?: string;
  /**
   * @remarks
   * The workflow definition version number.
   * 
   * @example
   * string_value
   */
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      executeMode: 'executeMode',
      globalAccess: 'globalAccess',
      hasDraftChanges: 'hasDraftChanges',
      name: 'name',
      skillCode: 'skillCode',
      skillHubDefinitionId: 'skillHubDefinitionId',
      sourceType: 'sourceType',
      status: 'status',
      tags: 'tags',
      updatedTime: 'updatedTime',
      versionNumber: 'versionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      executeMode: 'string',
      globalAccess: 'boolean',
      hasDraftChanges: 'boolean',
      name: 'string',
      skillCode: 'string',
      skillHubDefinitionId: 'number',
      sourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      updatedTime: 'string',
      versionNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of skill cards.
   */
  items?: ListSkillsResponseBodyItems[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListSkillsResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

