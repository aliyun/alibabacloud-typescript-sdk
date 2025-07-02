// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLayerACLRequest extends $dara.Model {
  /**
   * @remarks
   * Specify the access permission of the layer. A value of 1 indicates public and a value of 0 indicates private. The default value is 0.
   * 
   * @example
   * 1
   */
  acl?: string;
  /**
   * @remarks
   * Specify whether the layer is a public layer. Valid values: true and false.
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

