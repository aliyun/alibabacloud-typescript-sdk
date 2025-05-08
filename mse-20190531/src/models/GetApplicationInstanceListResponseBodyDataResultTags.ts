// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationInstanceListResponseBodyDataResultTags extends $dara.Model {
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

