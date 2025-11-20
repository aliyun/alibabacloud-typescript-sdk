// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxesRequest extends $dara.Model {
  /**
   * @remarks
   * 当前页码，从1开始计数
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * dnLkmeaJc9vHgbzREh2l0J4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * 按模板名称过滤
   * 
   * @example
   * templateName
   */
  templateName?: string;
  /**
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      templateName: 'templateName',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

