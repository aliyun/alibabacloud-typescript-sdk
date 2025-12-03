// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightWorkitemVersionResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1704251228000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1704251228000
   */
  gmtModified?: number;
  /**
   * @example
   * 1704902400000
   */
  gmtPublish?: number;
  /**
   * @example
   * 1704297600000
   */
  gmtStart?: number;
  /**
   * @example
   * 648131
   */
  id?: number;
  /**
   * @example
   * 7ba6e8261b973c976df76b7de1
   */
  identifier?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * 0
   */
  lockStatus?: number;
  name?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @example
   * 7eee44ec7f699d4e6980faxxxx
   */
  targetId?: string;
  /**
   * @example
   * Project
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      gmtPublish: 'gmtPublish',
      gmtStart: 'gmtStart',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      lockStatus: 'lockStatus',
      name: 'name',
      organizationId: 'organizationId',
      source: 'source',
      status: 'status',
      targetId: 'targetId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      gmtPublish: 'number',
      gmtStart: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      lockStatus: 'number',
      name: 'string',
      organizationId: 'string',
      source: 'string',
      status: 'number',
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

export class ExportInsightWorkitemVersionResponseBody extends $dara.Model {
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
  result?: ExportInsightWorkitemVersionResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightWorkitemVersionResponseBodyResult },
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

