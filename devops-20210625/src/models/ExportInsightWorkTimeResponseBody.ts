// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightWorkTimeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 120
   */
  actualValue?: number;
  description?: string;
  /**
   * @example
   * 1714978610000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1715011199999
   */
  gmtEnd?: number;
  /**
   * @example
   * 1714978610000
   */
  gmtModified?: number;
  /**
   * @example
   * 1714924800000
   */
  gmtStart?: number;
  /**
   * @example
   * 49506082
   */
  id?: number;
  /**
   * @example
   * da70ce5824231ca3c04ef808e0
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 09670872890eb1a0bb998exxxx
   */
  projectId?: string;
  /**
   * @example
   * 65659358c319d2a0f912xxxx
   */
  recorderId?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  type?: string;
  /**
   * @example
   * 000000000cd82d3df50d5e5a5c094094fd7b4461
   */
  uuid?: string;
  /**
   * @example
   * 120
   */
  value?: number;
  /**
   * @example
   * 17bc1cf9a037a15fc9ce76xxxx
   */
  workitemId?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'actualValue',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      organizationId: 'organizationId',
      projectId: 'projectId',
      recorderId: 'recorderId',
      source: 'source',
      type: 'type',
      uuid: 'uuid',
      value: 'value',
      workitemId: 'workitemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtEnd: 'number',
      gmtModified: 'number',
      gmtStart: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      organizationId: 'string',
      projectId: 'string',
      recorderId: 'string',
      source: 'string',
      type: 'string',
      uuid: 'string',
      value: 'number',
      workitemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightWorkTimeResponseBody extends $dara.Model {
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
  result?: ExportInsightWorkTimeResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightWorkTimeResponseBodyResult },
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

