// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchRequestScgFilterOffSetParam extends $dara.Model {
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
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
   * @example
   * 1
   */
  pageNum?: number;
  /**
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
   * @example
   * internal_id
   */
  sortKey?: string;
  /**
   * @example
   * ASC
   */
  sortOrder?: string;
  /**
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
  offSetParam?: ScgSearchRequestScgFilterOffSetParam;
  pageParam?: ScgSearchRequestScgFilterPageParam;
  /**
   * @remarks
   * This parameter is required.
   */
  sortParam?: ScgSearchRequestScgFilterSortParam;
  /**
   * @remarks
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
   * This parameter is required.
   */
  scgFilter?: ScgSearchRequestScgFilter;
  /**
   * @remarks
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

