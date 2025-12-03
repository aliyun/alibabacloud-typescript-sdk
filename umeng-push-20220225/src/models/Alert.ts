// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Alert extends $dara.Model {
  body?: string;
  subtitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      subtitle: 'subtitle',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      subtitle: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

