// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSampleBatchRequest extends $dara.Model {
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
   * The IDs of the samples to be modified in batches.
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
   * The tags, separated by commas.
   * 
   * @example
   * rm0102,rm0103
   */
  tags?: string;
  /**
   * @remarks
   * The latest version numbers.
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
      tags: 'tags',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ids: 'string',
      regId: 'string',
      tags: 'string',
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

