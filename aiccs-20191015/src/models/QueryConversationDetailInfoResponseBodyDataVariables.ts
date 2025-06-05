// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoResponseBodyDataVariables extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  id?: string;
  /**
   * @example
   * name
   */
  key?: string;
  /**
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * 示例值示例值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      name: 'Name',
      required: 'Required',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      name: 'string',
      required: 'boolean',
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

