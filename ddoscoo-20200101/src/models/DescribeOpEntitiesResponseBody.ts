// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOpEntitiesResponseBodyOpEntities } from "./DescribeOpEntitiesResponseBodyOpEntities";


export class DescribeOpEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation records.
   */
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB24D70C-71F5-4000-8CD8-22CDA0C53CD1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned operation records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opEntities)) {
      $dara.Model.validateArray(this.opEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

