// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tensorboard } from "./Tensorboard";


export class ListTensorboardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The TensorBoard instances.
   */
  tensorboards?: Tensorboard[];
  /**
   * @remarks
   * The total number of data sources that meet the conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboards: 'Tensorboards',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboards: { 'type': 'array', 'itemType': Tensorboard },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tensorboards)) {
      $dara.Model.validateArray(this.tensorboards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

