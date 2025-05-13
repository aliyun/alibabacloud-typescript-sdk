// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexTemplateRequestTemplate extends $dara.Model {
  /**
   * @example
   * {"mydata": {}}
   */
  aliases?: string;
  /**
   * @example
   * {"properties": {"created_at": {"type": "date","format": "EEE MMM dd HH:mm:ss Z yyyy"},"host_name": {"type": "keyword"}}}
   */
  mappings?: string;
  /**
   * @example
   * {\"index.refresh_interval\":\"1s\"}
   */
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

