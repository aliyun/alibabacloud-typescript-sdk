// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResultResponseBodyDataAsrResult extends $dara.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  roleName?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      emotionValue: 'emotionValue',
      end: 'end',
      role: 'role',
      roleName: 'roleName',
      speechRate: 'speechRate',
      words: 'words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      roleName: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

