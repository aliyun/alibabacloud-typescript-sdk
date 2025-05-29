// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStreamURLRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

