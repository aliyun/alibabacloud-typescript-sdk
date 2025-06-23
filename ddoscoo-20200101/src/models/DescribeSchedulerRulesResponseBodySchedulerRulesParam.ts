// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData } from "./DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData";


export class DescribeSchedulerRulesResponseBodySchedulerRulesParam extends $dara.Model {
  paramData?: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData;
  /**
   * @example
   * GA
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      paramData: 'ParamData',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData,
      paramType: 'string',
    };
  }

  validate() {
    if(this.paramData && typeof (this.paramData as any).validate === 'function') {
      (this.paramData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

