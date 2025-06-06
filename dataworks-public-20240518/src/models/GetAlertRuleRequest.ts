// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 28547072
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

