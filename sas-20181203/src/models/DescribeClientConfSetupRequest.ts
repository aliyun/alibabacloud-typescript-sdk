// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientConfSetupRequest extends $dara.Model {
  /**
   * @remarks
   * The tag that is added to the server.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  strategyTag?: string;
  /**
   * @remarks
   * The value of the tag. Valid values:
   * 
   * *   major
   * *   advanced
   * *   basic
   * 
   * This parameter is required.
   * 
   * @example
   * major
   */
  strategyTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      strategyTag: 'StrategyTag',
      strategyTagValue: 'StrategyTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyTag: 'string',
      strategyTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

