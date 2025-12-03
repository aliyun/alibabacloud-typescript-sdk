// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightSprintResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1711936113000
   */
  actualEnd?: number;
  /**
   * @example
   * 1711936113000
   */
  actualStart?: number;
  /**
   * @example
   * 1710989643000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1711728000000
   */
  gmtEnd?: number;
  /**
   * @example
   * 1711936113000
   */
  gmtModified?: number;
  /**
   * @example
   * 1711936113000
   */
  gmtStart?: number;
  /**
   * @example
   * 18471761
   */
  id?: number;
  /**
   * @example
   * e4895cadc86632f34dfaa7xxxx
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
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 385e7e5a4be6791f0a5185xxxx
   */
  projectId?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 50
   */
  status?: number;
  /**
   * @example
   * 60.0
   */
  workTimeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      actualEnd: 'actualEnd',
      actualStart: 'actualStart',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      id: 'id',
      identifier: 'identifier',
      isDeleted: 'isDeleted',
      name: 'name',
      organizationId: 'organizationId',
      projectId: 'projectId',
      source: 'source',
      status: 'status',
      workTimeCapacity: 'workTimeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEnd: 'number',
      actualStart: 'number',
      gmtCreate: 'number',
      gmtEnd: 'number',
      gmtModified: 'number',
      gmtStart: 'number',
      id: 'number',
      identifier: 'string',
      isDeleted: 'string',
      name: 'string',
      organizationId: 'string',
      projectId: 'string',
      source: 'string',
      status: 'number',
      workTimeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightSprintResponseBody extends $dara.Model {
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
  result?: ExportInsightSprintResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightSprintResponseBodyResult },
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

