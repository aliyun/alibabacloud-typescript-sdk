// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceResponseBodyWorkspaceIcon extends $dara.Model {
  /**
   * @example
   * TEAM
   */
  type?: string;
  /**
   * @example
   * https://example/file-manage-files/zh-CN/202***13/ldet/avatar3.jpg
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

