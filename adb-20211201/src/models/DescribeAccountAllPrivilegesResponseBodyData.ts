// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAllPrivilegesResponseBodyDataResult } from "./DescribeAccountAllPrivilegesResponseBodyDataResult";


export class DescribeAccountAllPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the position where the results are truncated. When a value of `true` is returned for the `Truncated` parameter, this parameter is present and contains the value to use for the Marker parameter in a subsequent call.
   * 
   * @example
   * 0573e74fd1ccb01739993a691e876074db6e1b6ad79f54115f0e98528432ba6a523cfec5780ade5189299cc3396f6ff7
   */
  marker?: string;
  /**
   * @remarks
   * The permissions.
   */
  result?: DescribeAccountAllPrivilegesResponseBodyDataResult[];
  /**
   * @remarks
   * Indicates whether the results are truncated. If the results are truncated, a value of `true` is returned. In this case, you must call this operation again to obtain all the results until a value of `false` is returned for this parameter.
   * 
   * @example
   * true
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      result: 'Result',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      result: { 'type': 'array', 'itemType': DescribeAccountAllPrivilegesResponseBodyDataResult },
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

