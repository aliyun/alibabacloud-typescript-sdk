// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLayerACLRequest extends $dara.Model {
  /**
   * @remarks
   * The access permissions of the layer. Valid values: 1 (public) and 0 (private). The default value is 0.
   * 
   * @example
   * 1
   */
  acl?: string;
  /**
   * @remarks
   * Specifies whether to make the layer public. Valid values: true and false.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  public?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      public: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

