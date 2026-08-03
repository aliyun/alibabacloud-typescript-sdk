// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchRequestScgFilterOffSetParam extends $dara.Model {
  /**
   * @remarks
   * Number of returned items
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * Number of skipped items
   * 
   * @example
   * 10
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilterPageParam extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilterSortParam extends $dara.Model {
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * internal_id
   */
  sortKey?: string;
  /**
   * @remarks
   * Sorting order
   * 
   * @example
   * ASC
   */
  sortOrder?: string;
  /**
   * @remarks
   * Sorting field (default: empty string)
   * 
   * @example
   * “”
   */
  sortText?: string;
  static names(): { [key: string]: string } {
    return {
      sortKey: 'SortKey',
      sortOrder: 'SortOrder',
      sortText: 'SortText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortKey: 'string',
      sortOrder: 'string',
      sortText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequestScgFilter extends $dara.Model {
  /**
   * @remarks
   * Paging type
   */
  offSetParam?: ScgSearchRequestScgFilterOffSetParam;
  /**
   * @remarks
   * Paging type
   */
  pageParam?: ScgSearchRequestScgFilterPageParam;
  /**
   * @remarks
   * Sorting parameters
   * 
   * This parameter is required.
   */
  sortParam?: ScgSearchRequestScgFilterSortParam;
  /**
   * @remarks
   * Whether to use the pageParam object for paging. Choose either offSetParam or pageParam. The default paging mode is pageParam.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useOffSet?: boolean;
  static names(): { [key: string]: string } {
    return {
      offSetParam: 'OffSetParam',
      pageParam: 'PageParam',
      sortParam: 'SortParam',
      useOffSet: 'UseOffSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offSetParam: ScgSearchRequestScgFilterOffSetParam,
      pageParam: ScgSearchRequestScgFilterPageParam,
      sortParam: ScgSearchRequestScgFilterSortParam,
      useOffSet: 'boolean',
    };
  }

  validate() {
    if(this.offSetParam && typeof (this.offSetParam as any).validate === 'function') {
      (this.offSetParam as any).validate();
    }
    if(this.pageParam && typeof (this.pageParam as any).validate === 'function') {
      (this.pageParam as any).validate();
    }
    if(this.sortParam && typeof (this.sortParam as any).validate === 'function') {
      (this.sortParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScgSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Query filter
   * 
   * This parameter is required.
   */
  scgFilter?: ScgSearchRequestScgFilter;
  /**
   * @remarks
   * Selection pool ID. Optional values: MC201132 (Ethnic Chinese Style), MC201136 (Pop Music), MC201139 (Sweet Love), MC201133 (Folk), MC201137 (Relaxing Reading), MC201138 (Happiness), PA202029 (Stories), PA202030 (Children\\"s Songs), PA202028 (Chinese Classics and History), PA202032 (Encyclopedia), PA202031 (English Children\\"s Songs)
   * 
   * This parameter is required.
   * 
   * @example
   * MC201132
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      scgFilter: 'ScgFilter',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scgFilter: ScgSearchRequestScgFilter,
      topicId: 'string',
    };
  }

  validate() {
    if(this.scgFilter && typeof (this.scgFilter as any).validate === 'function') {
      (this.scgFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

