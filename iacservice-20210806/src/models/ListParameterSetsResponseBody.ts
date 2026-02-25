// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterSetsResponseBodyParameterSetsParameters extends $dara.Model {
  name?: string;
  status?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * 111
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

export class ListParameterSetsResponseBodyParameterSetsRelationList extends $dara.Model {
  /**
   * @example
   * 2022-06-09T03:46:18Z
   */
  createTime?: string;
  /**
   * @example
   * task-433aead756057ffdf5326bf1e12ed
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

export class ListParameterSetsResponseBodyParameterSets extends $dara.Model {
  /**
   * @example
   * 2022-05-14T10:05:19Z
   */
  createTime?: string;
  deletionProtection?: boolean;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * 12
   */
  name?: string;
  /**
   * @example
   * pts-433aead756057ea135b21e89c
   */
  parameterSetId?: string;
  parameters?: ListParameterSetsResponseBodyParameterSetsParameters[];
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  parameterSets?: ListParameterSetsResponseBodyParameterSets[];
  /**
   * @example
   * 4E188A8C-D77A-53F2-9578-E9AD8ABF2FA9
   */
  requestId?: string;
  /**
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

