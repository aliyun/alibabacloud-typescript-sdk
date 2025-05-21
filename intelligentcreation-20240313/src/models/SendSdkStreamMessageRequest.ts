// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSdkStreamMessageRequest extends $dara.Model {
  /**
   * @example
   * {"test":""}
   */
  data?: string;
  /**
   * @remarks
   * header
   * 
   * @example
   * {}
   */
  header?: string;
  /**
   * @example
   * avatar
   */
  moduleName?: string;
  /**
   * @example
   * GetProject
   */
  operationName?: string;
  /**
   * @example
   * 123456
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

