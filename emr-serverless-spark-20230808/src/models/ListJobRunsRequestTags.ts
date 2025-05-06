// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRunsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

