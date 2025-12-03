// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightFieldResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 9798551
   */
  fieldId?: string;
  fieldName?: string;
  /**
   * @example
   * 1713752162000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1714977502000
   */
  gmtModified?: number;
  /**
   * @example
   * 666666
   */
  id?: number;
  /**
   * @example
   * field-444153
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * N
   */
  isSystem?: string;
  optionValue?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 150
   */
  position?: number;
  /**
   * @example
   * global
   */
  scope?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  targetId?: string;
  /**
   * @example
   * organization
   */
  targetType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldId: 'fieldId',
      fieldName: 'fieldName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      isSystem: 'isSystem',
      optionValue: 'optionValue',
      organizationId: 'organizationId',
      position: 'position',
      scope: 'scope',
      source: 'source',
      targetId: 'targetId',
      targetType: 'targetType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldId: 'string',
      fieldName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      isSystem: 'string',
      optionValue: 'string',
      organizationId: 'string',
      position: 'number',
      scope: 'string',
      source: 'string',
      targetId: 'string',
      targetType: 'string',
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

export class ExportInsightFieldResponseBody extends $dara.Model {
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
  result?: ExportInsightFieldResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightFieldResponseBodyResult },
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

