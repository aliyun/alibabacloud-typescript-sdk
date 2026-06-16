// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSampleBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IDs of the samples to delete in batches.
   * 
   * @example
   * 324,343
   */
  ids?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The list of versions.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,1
   */
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ids: 'ids',
      regId: 'regId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ids: 'string',
      regId: 'string',
      versions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

