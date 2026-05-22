// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadCachesRequest extends $dara.Model {
  content?: string[];
  headers?: { [key: string]: string };
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      headers: 'Headers',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

