// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The input URL that you specified for the media asset when you registered the media asset. For more information, see [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html).
   * 
   * >  You must specify at least one of the MediaId and InputURL parameters.
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * >  You must specify at least one of the MediaId and InputURL parameters.
   * 
   * @example
   * 86434e152b7d4f20be480574439fe***
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

