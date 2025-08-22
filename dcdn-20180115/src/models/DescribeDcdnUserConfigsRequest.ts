// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration that you want to query. Valid values:
   * 
   * *   domain_business_control: user configurations
   * *   bot_basic: the basic edition of bot traffic management, which supports authorized crawlers and provides threat intelligence
   * *   bot_Advance: the advanced edition of bot traffic management, which supports authorized crawlers and AI intelligent protection and provides threat intelligence
   * 
   * This parameter is required.
   * 
   * @example
   * domain_business_control
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

