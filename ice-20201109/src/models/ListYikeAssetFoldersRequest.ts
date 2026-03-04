// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeAssetFoldersRequest extends $dara.Model {
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
   * @example
   * ProductionId
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

