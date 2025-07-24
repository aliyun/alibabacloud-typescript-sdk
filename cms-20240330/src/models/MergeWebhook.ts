// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeWebhook extends $dara.Model {
  contentType?: string;
  extend?: string;
  gmtCreate?: string;
  gmtModified?: { [key: string]: any };
  headers?: string;
  identifier?: string;
  lang?: string;
  method?: string;
  name?: string;
  source?: string;
  type?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      headers: 'headers',
      identifier: 'identifier',
      lang: 'lang',
      method: 'method',
      name: 'name',
      source: 'source',
      type: 'type',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      extend: 'string',
      gmtCreate: 'string',
      gmtModified: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      headers: 'string',
      identifier: 'string',
      lang: 'string',
      method: 'string',
      name: 'string',
      source: 'string',
      type: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.gmtModified) {
      $dara.Model.validateMap(this.gmtModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

