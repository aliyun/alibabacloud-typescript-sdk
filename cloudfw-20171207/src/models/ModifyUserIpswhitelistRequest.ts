// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserIPSWhitelistRequest extends $dara.Model {
  direction?: number;
  ipVersion?: string;
  lang?: string;
  listType?: number;
  listValue?: string;
  sourceIp?: string;
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      listType: 'ListType',
      listValue: 'ListValue',
      sourceIp: 'SourceIp',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      ipVersion: 'string',
      lang: 'string',
      listType: 'number',
      listValue: 'string',
      sourceIp: 'string',
      whiteType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

