// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageListLabsResponseBodyLabs extends $dara.Model {
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 981
   */
  id?: number;
  introduction?: string;
  /**
   * @example
   * -
   */
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      introduction: 'Introduction',
      subTitle: 'SubTitle',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      id: 'number',
      introduction: 'string',
      subTitle: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

