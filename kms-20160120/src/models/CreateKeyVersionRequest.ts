// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  You can also set the value to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

