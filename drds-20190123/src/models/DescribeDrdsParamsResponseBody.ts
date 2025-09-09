// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsParamsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether a restart is required.
   * 
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @remarks
   * Indicates the default value of a parameter.
   * 
   * @example
   * 1000
   */
  paramDefaultValue?: string;
  /**
   * @remarks
   * Indicates the description of the parameter.
   */
  paramDesc?: string;
  /**
   * @remarks
   * Indicates the name of the parameter.
   * 
   * @example
   * SLOW_SQL_TIME
   */
  paramEnglishName?: string;
  /**
   * @remarks
   * Indicates the parameter level.
   * 
   * @example
   * INSTANCE
   */
  paramLevel?: string;
  /**
   * @remarks
   * Indicates the name of the parameter.
   */
  paramName?: string;
  /**
   * @remarks
   * Indicates the value range of the parameter.
   * 
   * @example
   * [1000-900000]
   */
  paramRanges?: string;
  /**
   * @remarks
   * Indicates the type of the parameter.
   * 
   * @example
   * CONFIG
   */
  paramType?: string;
  /**
   * @remarks
   * Indicates the value of the parameter.
   * 
   * @example
   * 1000
   */
  paramValue?: string;
  /**
   * @remarks
   * Indicates the name of the variable.
   * 
   * @example
   * slowSqlTime
   */
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      needRestart: 'NeedRestart',
      paramDefaultValue: 'ParamDefaultValue',
      paramDesc: 'ParamDesc',
      paramEnglishName: 'ParamEnglishName',
      paramLevel: 'ParamLevel',
      paramName: 'ParamName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      needRestart: 'boolean',
      paramDefaultValue: 'string',
      paramDesc: 'string',
      paramEnglishName: 'string',
      paramLevel: 'string',
      paramName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates information about parameters.
   */
  list?: DescribeDrdsParamsResponseBodyList[];
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeDrdsParamsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

