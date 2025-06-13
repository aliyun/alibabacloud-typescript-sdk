// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupBucketsListResponseBodyData extends $dara.Model {
  /**
   * @example
   * gj-bucket1
   */
  bucket?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

