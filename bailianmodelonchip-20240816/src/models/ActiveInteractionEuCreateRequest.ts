// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveInteractionEuCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://linkscreen-daily.oss-cn-hangzhou.aliyuncs.com/mock/251023/a_person_12.jpg
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

