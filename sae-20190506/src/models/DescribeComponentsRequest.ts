// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the supported components. Valid values:
   * 
   * *   **TOMCAT**
   * *   **JDK**
   * 
   * This parameter is required.
   * 
   * @example
   * TOMCAT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

