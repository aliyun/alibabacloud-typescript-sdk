// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarProjectResponseBodyFramesLayersMaterial extends $dara.Model {
  format?: string;
  id?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

