// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDefaultRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions. The value is a string in the JSON format. Format: `QueryArgs={"DefenseScene":"anti_scan"}`
   * 
   * @example
   * {"DefenseScene":"anti_scan"}
   */
  queryArgs?: string;
  static names(): { [key: string]: string } {
    return {
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

