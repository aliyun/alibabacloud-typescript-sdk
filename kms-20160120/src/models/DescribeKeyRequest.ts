// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 05754286-3ba2-4fa6-8d41-4323aca6****
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

