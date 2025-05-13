// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelVersion } from "./ModelVersion";


export class ListModelVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC***3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of model versions.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The model versions.
   */
  versions?: ModelVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ModelVersion },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

