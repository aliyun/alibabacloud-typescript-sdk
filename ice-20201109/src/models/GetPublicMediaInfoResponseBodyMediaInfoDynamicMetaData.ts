// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * {"AuditionUrl": "http://example-bucket.cdn.domain.com/example.mp4", "AuditionCount": 3}
   */
  data?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

