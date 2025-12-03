// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines extends $dara.Model {
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

export class ListVariableGroupsResponseBodyVariableGroupsVariables extends $dara.Model {
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

export class ListVariableGroupsResponseBodyVariableGroups extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 13232343434343
   */
  creatorAccountId?: string;
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
  relatedPipelines?: ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines[];
  /**
   * @example
   * 1586863220000
   */
  updateTime?: number;
  variables?: ListVariableGroupsResponseBodyVariableGroupsVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
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
      createTime: 'number',
      creatorAccountId: 'string',
      description: 'string',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      relatedPipelines: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsRelatedPipelines },
      updateTime: 'number',
      variables: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroupsVariables },
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

export class ListVariableGroupsResponseBody extends $dara.Model {
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
   * assassa
   */
  nextToken?: string;
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
  /**
   * @example
   * 30
   */
  totalCount?: number;
  variableGroups?: ListVariableGroupsResponseBodyVariableGroups[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      variableGroups: 'variableGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      variableGroups: { 'type': 'array', 'itemType': ListVariableGroupsResponseBodyVariableGroups },
    };
  }

  validate() {
    if(Array.isArray(this.variableGroups)) {
      $dara.Model.validateArray(this.variableGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

