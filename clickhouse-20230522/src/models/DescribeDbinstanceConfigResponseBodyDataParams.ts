// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigResponseBodyDataParams extends $dara.Model {
  /**
   * @example
   * Maximum number of concurrently executed queries. Zero means unlimited.
   */
  comment?: string;
  /**
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @example
   * 1
   */
  isDynamic?: number;
  /**
   * @example
   * 1
   */
  isUserModifiable?: number;
  /**
   * @example
   * max_concurrent_queries
   */
  name?: string;
  /**
   * @example
   * [0-100]
   */
  optional?: string;
  /**
   * @example
   * 0
   */
  paramRelyRule?: string;
  /**
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

