// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFormInfo extends $dara.Model {
  bucketName?: string;
  endpoint?: string;
  formData?: { [key: string]: string };
  objectKey?: string;
  ossAccessKeyId?: string;
  ossEndPoint?: string;
  ossSecurityToken?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucket_name',
      endpoint: 'endpoint',
      formData: 'form_data',
      objectKey: 'object_key',
      ossAccessKeyId: 'oss_access_key_id',
      ossEndPoint: 'oss_end_point',
      ossSecurityToken: 'oss_security_token',
      policy: 'policy',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      objectKey: 'string',
      ossAccessKeyId: 'string',
      ossEndPoint: 'string',
      ossSecurityToken: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

