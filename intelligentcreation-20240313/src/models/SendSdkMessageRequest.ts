// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSdkMessageRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  header?: string;
  /**
   * @example
   * avatar
   */
  moduleName?: string;
  /**
   * @example
   * getProject
   */
  operationName?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      header: 'header',
      moduleName: 'moduleName',
      operationName: 'operationName',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      header: 'string',
      moduleName: 'string',
      operationName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

