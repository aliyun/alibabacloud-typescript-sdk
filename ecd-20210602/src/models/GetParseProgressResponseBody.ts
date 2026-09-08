// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetParseProgressResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The error code returned when an execution exception occurs.
   * 
   * @example
   * Package.ReadFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when an execution exception occurs.
   * 
   * @example
   * Failed to read skill package
   */
  errorMessage?: string;
  requiredEnvVars?: string[];
  requiresApiKey?: boolean;
  /**
   * @remarks
   * The name in the SKILL.md file.
   * 
   * @example
   * name****
   */
  skillName?: string;
  /**
   * @remarks
   * The skill slug identifier. This is user-defined and unique within the tenant dimension.
   * 
   * @example
   * admapix******
   */
  slug?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PARSING_METADATA: parsing in progress.
   * - COMPLETED: completed.
   * - FAILED: failed.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The task key for parsing the skill package.
   * 
   * @example
   * 2E7D8B71-2677-1B4C-9E25-A88B9C5******
   */
  taskKey?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requiredEnvVars: 'RequiredEnvVars',
      requiresApiKey: 'RequiresApiKey',
      skillName: 'SkillName',
      slug: 'Slug',
      status: 'Status',
      taskKey: 'TaskKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requiredEnvVars: { 'type': 'array', 'itemType': 'string' },
      requiresApiKey: 'boolean',
      skillName: 'string',
      slug: 'string',
      status: 'string',
      taskKey: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requiredEnvVars)) {
      $dara.Model.validateArray(this.requiredEnvVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data object for parsing the skill package.
   */
  data?: GetParseProgressResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetParseProgressResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

