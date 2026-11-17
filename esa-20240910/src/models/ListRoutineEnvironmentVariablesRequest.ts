// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineEnvironmentVariablesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the environment.
   * Valid values:
   * - `production`: Production environment.
   * - `staging`: Staging environment.
   * 
   * This parameter is required.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * The keyword used to perform a case-insensitive fuzzy search for environment variable keys and values.
   * 
   * @example
   * LOG
   */
  keyWord?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * This parameter is required.
   * 
   * @example
   * my_routine
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      keyWord: 'KeyWord',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      keyWord: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

