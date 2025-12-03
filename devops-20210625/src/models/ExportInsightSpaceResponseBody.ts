// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightSpaceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Project
   */
  category?: string;
  customCode?: string;
  description?: string;
  /**
   * @example
   * 1706510424000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1706511201000
   */
  gmtModified?: number;
  /**
   * @example
   * 11034222
   */
  id?: number;
  /**
   * @example
   * 83a2861bbb43b270a04b42xxxx
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  name?: string;
  /**
   * @example
   * 61db9af2148974246be6xxxx
   */
  organizationId?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 10
   */
  stage?: string;
  status?: string;
  /**
   * @example
   * Project
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      customCode: 'customCode',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      name: 'name',
      organizationId: 'organizationId',
      source: 'source',
      stage: 'stage',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      customCode: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      name: 'string',
      organizationId: 'string',
      source: 'string',
      stage: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightSpaceResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  result?: ExportInsightSpaceResponseBodyResult[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ExportInsightSpaceResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

