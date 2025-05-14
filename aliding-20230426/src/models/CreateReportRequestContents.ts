// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportRequestContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ### 序号1
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * markdown
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 今日完成工作
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  sort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      key: 'Key',
      sort: 'Sort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      key: 'string',
      sort: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

