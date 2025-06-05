// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @example
   * d7f3e92b-7947-4c20-bf37-ef66fc71007b
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagDescription?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagName?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      outputTagDescription: 'OutputTagDescription',
      outputTagName: 'OutputTagName',
      outputTagValue: 'OutputTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      outputTagDescription: 'string',
      outputTagName: 'string',
      outputTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

