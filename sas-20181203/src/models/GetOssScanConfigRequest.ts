// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

