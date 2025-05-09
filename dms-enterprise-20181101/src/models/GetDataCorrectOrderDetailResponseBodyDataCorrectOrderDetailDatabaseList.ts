// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase";


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList extends $dara.Model {
  database?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

