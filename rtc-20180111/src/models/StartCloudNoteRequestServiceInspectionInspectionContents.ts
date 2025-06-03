// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 销售在开场白的时候主动向客户打招呼进行欢迎
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 到店欢迎-欢迎语
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

