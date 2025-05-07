// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EcsSpec } from "./EcsSpec";


export class ListEcsSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ECS specifications.
   */
  ecsSpecs?: EcsSpec[];
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
   * The number of types that meet the filter conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ecsSpecs: 'EcsSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpecs: { 'type': 'array', 'itemType': EcsSpec },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

