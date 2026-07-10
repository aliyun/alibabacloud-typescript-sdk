// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigResponseBodyDataParams extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Maximum number of concurrently executed queries. Zero means unlimited.
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter takes effect dynamically (without requiring a restart).
   * 
   * @example
   * 1
   */
  isDynamic?: number;
  /**
   * @remarks
   * Indicates whether the parameter can be modified by users.
   * 
   * @example
   * 1
   */
  isUserModifiable?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * max_concurrent_queries
   */
  name?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [0-100]
   */
  optional?: string;
  /**
   * @remarks
   * The parameter dependencies.
   * 
   * @example
   * 0
   */
  paramRelyRule?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      defaultValue: 'DefaultValue',
      isDynamic: 'IsDynamic',
      isUserModifiable: 'IsUserModifiable',
      name: 'Name',
      optional: 'Optional',
      paramRelyRule: 'ParamRelyRule',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      isDynamic: 'number',
      isUserModifiable: 'number',
      name: 'string',
      optional: 'string',
      paramRelyRule: 'string',
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

export class DescribeDBInstanceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The user parameters.
   */
  params?: DescribeDBInstanceConfigResponseBodyDataParams[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      params: { 'type': 'array', 'itemType': DescribeDBInstanceConfigResponseBodyDataParams },
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: DescribeDBInstanceConfigResponseBodyData;
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 66428721-xxxx-xxxx-xxxx-3BD1B67837E0
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
      data: DescribeDBInstanceConfigResponseBodyData,
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

