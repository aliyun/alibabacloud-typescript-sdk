// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTemplateTag extends $dara.Model {
  buildID?: string;
  createdAt?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      buildID: 'buildID',
      createdAt: 'createdAt',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildID: 'string',
      createdAt: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

