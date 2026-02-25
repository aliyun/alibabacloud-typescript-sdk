// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterSetResponseBodyParameterSetParameters extends $dara.Model {
  /**
   * @example
   * test1121
   */
  name?: string;
  status?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * vpc-2ze83xrka9ktxy0pnaxn5
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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
   * @example
   * 2022-04-24T22:58:50Z
   */
  createTime?: string;
  /**
   * @example
   * mod-433aead756057101546eb5d50c1
   */
  resourceId?: string;
  /**
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
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * pts-3b6cb9fa4751afff9c5e4e01624b9
   */
  parameterSetId?: string;
  parameters?: GetParameterSetResponseBodyParameterSetParameters[];
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
  parameterSet?: GetParameterSetResponseBodyParameterSet;
  /**
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

