// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAppInstancesResponseBodyDeleteAppInstanceModels } from "./DeleteAppInstancesResponseBodyDeleteAppInstanceModels";


export class DeleteAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  deleteAppInstanceModels?: DeleteAppInstancesResponseBodyDeleteAppInstanceModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAppInstanceModels: 'DeleteAppInstanceModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAppInstanceModels: { 'type': 'array', 'itemType': DeleteAppInstancesResponseBodyDeleteAppInstanceModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deleteAppInstanceModels)) {
      $dara.Model.validateArray(this.deleteAppInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

