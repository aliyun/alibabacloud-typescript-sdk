// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryRowDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The engine type. Valid values:
   * - ODPS.ODPS
   * - EMR
   * - HOLO.POSTGRES
   * 
   * This parameter is required.
   * 
   * @example
   * EMR
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20260706102936ec393b1a03ae0d4atarget
   */
  instId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      instId: 'InstId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      instId: 'string',
      pageNo: 'number',
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

