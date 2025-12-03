// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVariableGroupResponseBodyVariableGroupRelatedPipelines extends $dara.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 流水线
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroupVariables extends $dara.Model {
  /**
   * @example
   * true
   */
  isEncrypted?: boolean;
  /**
   * @example
   * name1
   */
  name?: string;
  /**
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isEncrypted: 'isEncrypted',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEncrypted: 'boolean',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBodyVariableGroup extends $dara.Model {
  /**
   * @example
   * 13232343434343
   */
  ccreatorAccountId?: string;
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 变量组
   */
  description?: string;
  /**
   * @example
   * 12234
   */
  id?: number;
  /**
   * @example
   * 13232343434343
   */
  modifierAccountId?: string;
  /**
   * @example
   * 变量组
   */
  name?: string;
  relatedPipelines?: GetVariableGroupResponseBodyVariableGroupRelatedPipelines[];
  /**
   * @example
   * 1586863220000
   */
  updateTime?: number;
  variables?: GetVariableGroupResponseBodyVariableGroupVariables[];
  static names(): { [key: string]: string } {
    return {
      ccreatorAccountId: 'ccreatorAccountId',
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      relatedPipelines: 'relatedPipelines',
      updateTime: 'updateTime',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccreatorAccountId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      relatedPipelines: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupRelatedPipelines },
      updateTime: 'number',
      variables: { 'type': 'array', 'itemType': GetVariableGroupResponseBodyVariableGroupVariables },
    };
  }

  validate() {
    if(Array.isArray(this.relatedPipelines)) {
      $dara.Model.validateArray(this.relatedPipelines);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVariableGroupResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  variableGroup?: GetVariableGroupResponseBodyVariableGroup;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      variableGroup: 'variableGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      variableGroup: GetVariableGroupResponseBodyVariableGroup,
    };
  }

  validate() {
    if(this.variableGroup && typeof (this.variableGroup as any).validate === 'function') {
      (this.variableGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

