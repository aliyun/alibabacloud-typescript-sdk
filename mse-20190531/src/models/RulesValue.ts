// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesValueRules } from "./RulesValueRules";


export class RulesValue extends $dara.Model {
  status?: number;
  rate?: number;
  enable?: boolean;
  tag?: string;
  /**
   * @example
   * gray
   */
  name?: string;
  id?: number;
  instanceNum?: number;
  rules?: RulesValueRules;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      rate: 'Rate',
      enable: 'Enable',
      tag: 'Tag',
      name: 'Name',
      id: 'Id',
      instanceNum: 'InstanceNum',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      rate: 'number',
      enable: 'boolean',
      tag: 'string',
      name: 'string',
      id: 'number',
      instanceNum: 'number',
      rules: RulesValueRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

