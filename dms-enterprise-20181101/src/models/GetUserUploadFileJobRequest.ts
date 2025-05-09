// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserUploadFileJobRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the file upload task. The key is returned when you call the [CreateUploadFileJob](https://help.aliyun.com/document_detail/206059.html) or [CreateUploadOSSFileJob](https://help.aliyun.com/document_detail/206060.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 65254a49100e
   */
  jobKey?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobKey: 'JobKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobKey: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

