// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * You can call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation to query the versions of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

