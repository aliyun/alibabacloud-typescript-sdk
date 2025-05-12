// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConfigResponseBodyDataParams extends $dara.Model {
  /**
   * @remarks
   * The comments on the parameter.
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 15
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter immediately takes effect without requiring a restart.
   * 
   * @example
   * true
   */
  isDynamic?: number;
  /**
   * @remarks
   * Indicates whether the parameter is modifiable.
   * 
   * @example
   * true
   */
  isUserModifiable?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * doris_scanner_thread_pool_thread_num
   */
  name?: string;
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * @example
   * [0-20000]
   */
  optional?: string;
  /**
   * @remarks
   * The category of the parameter.
   */
  paramCategory?: string;
  /**
   * @remarks
   * The current value of the parameter.
   * 
   * @example
   * 10
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
      paramCategory: 'ParamCategory',
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
      paramCategory: 'string',
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

