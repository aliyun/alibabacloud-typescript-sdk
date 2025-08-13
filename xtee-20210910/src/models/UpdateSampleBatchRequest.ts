// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSampleBatchRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Batch operation IDs.
   * 
   * @example
   * 324,343
   */
  ids?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Tags (comma-separated).
   * 
   * @example
   * rm0102,rm0103
   */
  tags?: string;
  /**
   * @remarks
   * Version number (latest).
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

