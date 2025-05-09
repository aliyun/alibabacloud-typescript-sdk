// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageRelationship } from "./LineageRelationship";


export class ListLineageRelationshipsResponseBodyPagingInfo extends $dara.Model {
  lineageRelationships?: LineageRelationship[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lineageRelationships: 'LineageRelationships',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageRelationships: { 'type': 'array', 'itemType': LineageRelationship },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lineageRelationships)) {
      $dara.Model.validateArray(this.lineageRelationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

