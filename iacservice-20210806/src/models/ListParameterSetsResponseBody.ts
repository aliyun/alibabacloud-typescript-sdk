// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterSetsResponseBodyParameterSetsParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * region
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the parameter is a secret parameter. Secret parameters are hidden in API responses and console displays, and are stored with encryption.
   */
  secret?: boolean;
  /**
   * @remarks
   * The parameter set status. Valid values:
   * 
   * - HAS_VALUE (default): A specific value is defined.
   * 
   * - EXPLICIT_NULL: Explicitly set to null.
   * 
   * @example
   * HAS_VALUE
   */
  status?: string;
  /**
   * @remarks
   * The parameter type (string/number/bool/map(string)/list(string)).
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * cn-beijing
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      secret: 'secret',
      status: 'status',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      secret: 'boolean',
      status: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSetsRelationList extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-06-09T03:46:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource ID. When the resource type is ModuleVersion, the ID is composed of <moduleId>-<moduleversion>, such as mod-34535345df123fr-v3.
   * 
   * @example
   * task-433aead756057ffdf5326bf1e12ed
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Module: template.
   * - ModuleVersion: template version.
   * - Task: task.
   * 
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSets extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-05-14T10:05:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the parameter set.
   * 
   * @example
   * This is parameterSet
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter set.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parameter set.
   * 
   * @example
   * pts-433aead756057ea135b21e89c
   */
  parameterSetId?: string;
  /**
   * @remarks
   * The parameters in the parameter set.
   */
  parameters?: ListParameterSetsResponseBodyParameterSetsParameters[];
  /**
   * @remarks
   * The associated resources.
   */
  relationList?: ListParameterSetsResponseBodyParameterSetsRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deletionProtection: 'deletionProtection',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
      relationList: 'relationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsParameters },
      relationList: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results returned per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The parameter sets.
   */
  parameterSets?: ListParameterSetsResponseBodyParameterSets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E188A8C-D77A-53F2-9578-E9AD8ABF2FA9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSets)) {
      $dara.Model.validateArray(this.parameterSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

