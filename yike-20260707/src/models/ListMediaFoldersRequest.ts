// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaFoldersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 50. If the value exceeds 50, it is truncated to 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID. If this parameter is not specified, the default project of the current account is used. The value format is `pd_{uid}`.
   * 
   * @example
   * pd_1585***
   */
  productionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productionId: 'ProductionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      productionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

