// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData extends $dara.Model {
  /**
   * @example
   * ga-bp1htlajy5509rc99****
   */
  cloudInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudInstanceId: 'CloudInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

