// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyTagListTag extends $dara.Model {
  /**
   * @remarks
   * Label key.
   * 
   * @example
   * APP
   */
  tagKey?: string;
  /**
   * @remarks
   * Label value.
   * 
   * @example
   * value3
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

