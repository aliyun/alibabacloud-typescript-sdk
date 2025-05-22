// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. This parameter is effective only when ShareType is Private.  
   * 
   * A maximum of 20 tag keys are supported.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. This parameter is effective only when ShareType is Private.  
   * 
   * A maximum of 20 tag values are supported.
   * 
   * @example
   * deploy
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

