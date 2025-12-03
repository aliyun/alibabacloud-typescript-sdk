// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightCustomValueResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 66.6
   */
  doubleValue?: number;
  /**
   * @example
   * 34dde3dfa5e3750151a7c4xxxx
   */
  fieldId?: string;
  /**
   * @example
   * 1704950971000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1714669494000
   */
  gmtModified?: number;
  /**
   * @example
   * 320737507
   */
  id?: number;
  /**
   * @example
   * 442d4a6a9980e841dc192a411080xxxx
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 66
   */
  longValue?: number;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 1ee00fcb1a18c2dc83dafdxxxx
   */
  targetId?: string;
  /**
   * @example
   * Workitem
   */
  targetType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * 66
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      doubleValue: 'doubleValue',
      fieldId: 'fieldId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      longValue: 'longValue',
      organizationId: 'organizationId',
      targetId: 'targetId',
      targetType: 'targetType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doubleValue: 'number',
      fieldId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      longValue: 'number',
      organizationId: 'string',
      targetId: 'string',
      targetType: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightCustomValueResponseBody extends $dara.Model {
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
  result?: ExportInsightCustomValueResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightCustomValueResponseBodyResult },
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

