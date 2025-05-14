// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveRecordJobRequestRecordOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * imsbucket1
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the storage service.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The type of the storage address.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

