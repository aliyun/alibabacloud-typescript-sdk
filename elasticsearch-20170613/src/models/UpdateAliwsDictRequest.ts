// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAliwsDictRequest extends $dara.Model {
  /**
   * @remarks
   * The file name, source, and OSS file information of the AliNLP word segmentation dictionary.
   * 
   * @example
   * [{"name":"deploy_0.txt","ossObject":{"bucketName":"search-cloud-test-cn-****","key":"user_dict/dict_0.txt"},"sourceType":"OSS","type":"ALI_WS"},{"name":"aliws_ext_dict.txt","sourceType":"ORIGIN","type":"ALI_WS"}]
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

