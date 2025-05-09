// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMetaTableDetailInfoResponseBodyDetailInfoColumnList } from "./GetMetaTableDetailInfoResponseBodyDetailInfoColumnList";
import { GetMetaTableDetailInfoResponseBodyDetailInfoIndexList } from "./GetMetaTableDetailInfoResponseBodyDetailInfoIndexList";


export class GetMetaTableDetailInfoResponseBodyDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The columns in the table.
   */
  columnList?: GetMetaTableDetailInfoResponseBodyDetailInfoColumnList[];
  /**
   * @remarks
   * The list of indexes.
   */
  indexList?: GetMetaTableDetailInfoResponseBodyDetailInfoIndexList[];
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      indexList: 'IndexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoColumnList },
      indexList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoIndexList },
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    if(Array.isArray(this.indexList)) {
      $dara.Model.validateArray(this.indexList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

