// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceNews extends $dara.Model {
  date?: number;
  description?: string;
  image?: string;
  link?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      description: 'description',
      image: 'image',
      link: 'link',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      description: 'string',
      image: 'string',
      link: 'string',
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

