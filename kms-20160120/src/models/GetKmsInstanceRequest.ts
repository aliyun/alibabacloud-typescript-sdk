// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

