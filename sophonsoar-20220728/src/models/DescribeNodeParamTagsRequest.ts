// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeParamTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the component node.
   * 
   * This parameter is required.
   * 
   * @example
   * python3_2
   */
  nodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

