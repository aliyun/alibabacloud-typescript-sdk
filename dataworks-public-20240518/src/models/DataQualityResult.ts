// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityResultDetails } from "./DataQualityResultDetails";
import { DataQualityResultRule } from "./DataQualityResultRule";


export class DataQualityResult extends $dara.Model {
  details?: DataQualityResultDetails[];
  /**
   * @example
   * 10001
   */
  id?: number;
  rule?: DataQualityResultRule;
  /**
   * @example
   * [   {     "gender": "male",     "_count": 100   }, {     "gender": "female",     "_count": 100   } ]
   */
  sample?: string;
  /**
   * @example
   * Passed
   */
  status?: string;
  /**
   * @example
   * 20001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DataQualityResultDetails },
      id: 'number',
      rule: DataQualityResultRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

