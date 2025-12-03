// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightTagRefResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1696660187000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1696660187000
   */
  gmtModified?: number;
  /**
   * @example
   * 41317426
   */
  id?: number;
  /**
   * @example
   * 8545272
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 1
   */
  name?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 19e0bc5348ccbe6c0d00fbxxxx
   */
  tagId?: string;
  /**
   * @example
   * bde89961b5a4acc8cf54eaxxxx
   */
  targetId?: string;
  /**
   * @example
   * Workitem
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      name: 'name',
      organizationId: 'organizationId',
      tagId: 'tagId',
      targetId: 'targetId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      name: 'string',
      organizationId: 'string',
      tagId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightTagRefResponseBody extends $dara.Model {
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
  result?: ExportInsightTagRefResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightTagRefResponseBodyResult },
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

