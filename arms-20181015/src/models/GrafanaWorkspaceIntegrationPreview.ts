// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceIntegrationPreview extends $dara.Model {
  id?: string;
  image?: string;
  name?: string;
  thumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      image: 'image',
      name: 'name',
      thumbnail: 'thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      image: 'string',
      name: 'string',
      thumbnail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

