// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaYiBlockRequestScopeGroupBlockScopeParams extends $dara.Model {
  az?: string;
  idc?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      az: 'Az',
      idc: 'Idc',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      az: 'string',
      idc: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

