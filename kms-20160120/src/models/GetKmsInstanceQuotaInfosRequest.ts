// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceQuotaInfosRequest extends $dara.Model {
  kmsInstanceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

