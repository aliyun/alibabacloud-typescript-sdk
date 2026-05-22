// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRoutesRequest extends $dara.Model {
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
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

