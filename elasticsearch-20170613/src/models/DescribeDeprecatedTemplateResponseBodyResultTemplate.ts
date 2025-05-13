// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeprecatedTemplateResponseBodyResultTemplate extends $dara.Model {
  /**
   * @example
   * "{}"
   */
  aliases?: string;
  /**
   * @example
   * "{\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}"
   */
  mappings?: string;
  /**
   * @example
   * "{\\"index.number_of_shards\\":\\"1\\"}"
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

