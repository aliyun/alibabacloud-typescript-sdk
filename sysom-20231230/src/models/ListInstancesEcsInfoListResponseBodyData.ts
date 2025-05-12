// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 11.193.52.91
   */
  ip?: string;
  /**
   * @example
   * sysom
   */
  tagKey?: string;
  /**
   * @example
   * diagnosis
   */
  tagValue?: string;
  /**
   * @example
   * public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      tagKey: 'tag_key',
      tagValue: 'tag_value',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      tagKey: 'string',
      tagValue: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

