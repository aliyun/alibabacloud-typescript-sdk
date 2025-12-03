// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightExpectedWorkTimeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1714976497000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1714976520000
   */
  gmtModified?: number;
  /**
   * @example
   * 26281535
   */
  id?: number;
  /**
   * @example
   * bd4ddc7b0ea0ef2ab52699xxxx
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 61db9af2148974246be6xxxx
   */
  organizationId?: string;
  /**
   * @example
   * 6c4687b0179e1d458fedf1xxxx
   */
  projectId?: string;
  /**
   * @example
   * 63466a385dc8531eebd7xxxx
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
   * 180
   */
  value?: number;
  /**
   * @example
   * de7c6fd3bd4b53f4d9e279xxxx
   */
  workitemId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      organizationId: 'organizationId',
      projectId: 'projectId',
      recorderId: 'recorderId',
      source: 'source',
      type: 'type',
      value: 'value',
      workitemId: 'workitemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      organizationId: 'string',
      projectId: 'string',
      recorderId: 'string',
      source: 'string',
      type: 'string',
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

export class ExportInsightExpectedWorkTimeResponseBody extends $dara.Model {
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
  result?: ExportInsightExpectedWorkTimeResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightExpectedWorkTimeResponseBodyResult },
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

