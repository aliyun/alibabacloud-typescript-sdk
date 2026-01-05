// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntity } from "./LineageEntity";
import { LineageRelationship } from "./LineageRelationship";


export class ListLineagesResponseBodyPagingInfoLineages extends $dara.Model {
  dstEntity?: LineageEntity;
  relationships?: LineageRelationship[];
  srcEntity?: LineageEntity;
  static names(): { [key: string]: string } {
    return {
      dstEntity: 'DstEntity',
      relationships: 'Relationships',
      srcEntity: 'SrcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntity: LineageEntity,
      relationships: { 'type': 'array', 'itemType': LineageRelationship },
      srcEntity: LineageEntity,
    };
  }

  validate() {
    if(this.dstEntity && typeof (this.dstEntity as any).validate === 'function') {
      (this.dstEntity as any).validate();
    }
    if(Array.isArray(this.relationships)) {
      $dara.Model.validateArray(this.relationships);
    }
    if(this.srcEntity && typeof (this.srcEntity as any).validate === 'function') {
      (this.srcEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLineagesResponseBodyPagingInfo extends $dara.Model {
  lineages?: ListLineagesResponseBodyPagingInfoLineages[];
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
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lineages: 'Lineages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineages: { 'type': 'array', 'itemType': ListLineagesResponseBodyPagingInfoLineages },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lineages)) {
      $dara.Model.validateArray(this.lineages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLineagesResponseBody extends $dara.Model {
  pagingInfo?: ListLineagesResponseBodyPagingInfo;
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListLineagesResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

