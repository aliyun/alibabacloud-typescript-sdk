// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag code.
   * 
   * @example
   * xx
   */
  tagCode?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * xx
   */
  tagValue?: any;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'tagCode',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagValue: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

