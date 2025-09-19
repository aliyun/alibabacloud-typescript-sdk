// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * This parameter is required.
   * 
   * @example
   * {"strategyId":8167126}
   */
  config?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.X.X
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the policy. Set the value to hc_strategy, which indicates baseline check policies.
   * 
   * This parameter is required.
   * 
   * @example
   * hc_strategy
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
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

