// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsResponseBodyCodeVersions extends $dara.Model {
  codeDescription?: string;
  codeVersion?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      codeVersion: 'CodeVersion',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      codeVersion: 'string',
      createTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

