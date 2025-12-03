// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWorkitemActivityResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1714961337000
   */
  gmtEvent?: number;
  /**
   * @example
   * 4406380356
   */
  id?: number;
  /**
   * @example
   * 254662353
   */
  identifier?: string;
  /**
   * @example
   * 1
   */
  newValue?: string;
  /**
   * @example
   * 2
   */
  oldValue?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * 2a62349afcbef7f23d8f31xxxx
   */
  projectId?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * workitem.update.priority
   */
  type?: string;
  /**
   * @example
   * ec69eae498acce08ff7260xxxx
   */
  workitemId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtEvent: 'gmtEvent',
      id: 'id',
      identifier: 'identifier',
      newValue: 'newValue',
      oldValue: 'oldValue',
      organizationId: 'organizationId',
      projectId: 'projectId',
      source: 'source',
      type: 'type',
      workitemId: 'workitemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEvent: 'number',
      id: 'number',
      identifier: 'string',
      newValue: 'string',
      oldValue: 'string',
      organizationId: 'string',
      projectId: 'string',
      source: 'string',
      type: 'string',
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

export class ExportWorkitemActivityResponseBody extends $dara.Model {
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
  result?: ExportWorkitemActivityResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportWorkitemActivityResponseBodyResult },
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

