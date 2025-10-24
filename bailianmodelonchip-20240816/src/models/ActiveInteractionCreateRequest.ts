// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveInteractionCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://linkscreen-daily.oss-cn-hangzhou.aliyuncs.com/mock/251023/a_person_1.jpg
   */
  image?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

