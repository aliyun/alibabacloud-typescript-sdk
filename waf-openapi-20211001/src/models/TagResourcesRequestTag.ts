// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20.
   * 
   * @example
   * demoTagValue
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

