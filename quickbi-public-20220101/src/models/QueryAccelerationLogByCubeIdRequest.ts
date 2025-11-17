// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccelerationLogByCubeIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-05-15 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-04-15 00:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      endDate: 'EndDate',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      endDate: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

