// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentVariablesValue } from "./EnvironmentVariablesValue";


export class ListRoutineEnvironmentVariablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of environment variables.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The environment variable dictionary.
   */
  environmentVariables?: { [key: string]: EnvironmentVariablesValue };
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of environment variables.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      environmentVariables: 'EnvironmentVariables',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': EnvironmentVariablesValue },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

