// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterSetResponseBodyParameterSetParameters extends $dara.Model {
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
   * Specifies whether the parameter is secret. Secret parameters are hidden in API responses and console displays, and are stored with encryption.
   */
  secret?: boolean;
  /**
   * @remarks
   * The parameter set status. Valid values:
   * 
   * - HAS_VALUE (default): A specific value is defined.
   * - EXPLICIT_NULL: Explicitly set to null.
   * 
   * @example
   * HAS_VALUE
   */
  status?: string;
  /**
   * @remarks
   * The type of the parameter (string/number/bool/map(string)/list(string)).
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
   * cn-hangzhou
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

export class GetParameterSetResponseBodyParameterSetRelationList extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-04-24T22:58:50Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource ID. When the resource type is ModuleVersion, the ID is composed of <moduleId>-<moduleversion>, such as mod-34535345df123fr-v3.
   * 
   * @example
   * mod-433aead756057101546eb5d50c1
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

export class GetParameterSetResponseBodyParameterSet extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
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
   * The parameter set ID.
   * 
   * @example
   * pts-3b6cb9fa4751afff9c5e4e01624b9
   */
  parameterSetId?: string;
  /**
   * @remarks
   * The parameters in the parameter set.
   */
  parameters?: GetParameterSetResponseBodyParameterSetParameters[];
  /**
   * @remarks
   * The association relationships.
   */
  relationList?: GetParameterSetResponseBodyParameterSetRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
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
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetParameters },
      relationList: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetRelationList },
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

export class GetParameterSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter set details.
   */
  parameterSet?: GetParameterSetResponseBodyParameterSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99905C7C-1320-5E7F-A798-3071482EB08E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSet: 'parameterSet',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSet: GetParameterSetResponseBodyParameterSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameterSet && typeof (this.parameterSet as any).validate === 'function') {
      (this.parameterSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

