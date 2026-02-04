// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupSupportParamResponseBodyResourceList extends $dara.Model {
  /**
   * @remarks
   * The service category.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 5
   */
  dbVersion?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * rt_threshold_ms
   */
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dbType: 'string',
      dbVersion: 'string',
      paramName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupSupportParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB73740C-23E2-4392-9DA4-2660C74C****
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters.
   */
  resourceList?: DescribeParameterGroupSupportParamResponseBodyResourceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': DescribeParameterGroupSupportParamResponseBodyResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

