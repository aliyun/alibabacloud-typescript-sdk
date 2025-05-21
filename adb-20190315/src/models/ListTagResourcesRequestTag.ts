// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify multiple tag keys. The tag key cannot be an empty string. Valid values of N: 1 to 20.
   * 
   * > You must specify at least one of the following parameters: ResourceId.N and Tag.N.Key.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify multiple tag values. The tag value can be an empty string. Valid values of N: 1 to 20.
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

