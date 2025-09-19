// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the baseline.
   * 
   * @example
   * Valid values include but are not limited to ak_leak, duplicate_uid, duplicate_pwd_hash, and non_pwd_user.
   */
  baselineItemKey?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 06293273b67d19516cfcc712194f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItemKey: 'BaselineItemKey',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItemKey: 'string',
      imageUuid: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

