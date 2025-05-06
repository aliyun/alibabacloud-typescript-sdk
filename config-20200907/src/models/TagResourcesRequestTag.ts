// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the resource.
   * 
   * You can add up to 20 tag keys to a resource.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * You can add up to 20 tag values to a resource.
   * 
   * @example
   * prod
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

