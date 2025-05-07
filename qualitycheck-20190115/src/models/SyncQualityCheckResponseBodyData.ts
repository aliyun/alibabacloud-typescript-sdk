// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncQualityCheckResponseBodyDataRules } from "./SyncQualityCheckResponseBodyDataRules";


export class SyncQualityCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1584535485856
   */
  beginTime?: number;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 66E1ACB866E1ACB8
   */
  taskId?: string;
  /**
   * @example
   * 20200876-66E1ACB8
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      rules: 'Rules',
      score: 'Score',
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
      score: 'number',
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

