// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.
   * 
   * > You can add up to 20 tags at a time.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.
   * 
   * > You can add up to 20 tags at a time.
   * 
   * @example
   * testvalue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

