// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightSpaceRefResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 65659358c319d2a0f912xxxx
   */
  creatorId?: string;
  /**
   * @example
   * 7bc2be989727d0d4c9801fxxxx
   */
  fromId?: string;
  /**
   * @example
   * 1704267849000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1704267849000
   */
  gmtModified?: number;
  /**
   * @example
   * 356525
   */
  id?: number;
  /**
   * @example
   * 49565
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 65659358c319d2a0f912xxxx
   */
  modifierId?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 732026500a48d7a74f8b43xxxx
   */
  toId?: string;
  /**
   * @example
   * ASSOCIATED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creatorId',
      fromId: 'fromId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      modifierId: 'modifierId',
      organizationId: 'organizationId',
      toId: 'toId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      fromId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      modifierId: 'string',
      organizationId: 'string',
      toId: 'string',
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

export class ExportInsightSpaceRefResponseBody extends $dara.Model {
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
  result?: ExportInsightSpaceRefResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightSpaceRefResponseBodyResult },
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

