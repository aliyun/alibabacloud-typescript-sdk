// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCheckRequestHarmNoticeCombineParam extends $dara.Model {
  combine?: boolean;
  combineMark?: string;
  combineRule?: string;
  static names(): { [key: string]: string } {
    return {
      combine: 'Combine',
      combineMark: 'CombineMark',
      combineRule: 'CombineRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combine: 'boolean',
      combineMark: 'string',
      combineRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

