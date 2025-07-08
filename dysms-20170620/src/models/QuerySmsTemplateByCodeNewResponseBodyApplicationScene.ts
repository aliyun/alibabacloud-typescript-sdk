// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateByCodeNewResponseBodyApplicationScene extends $dara.Model {
  content?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

