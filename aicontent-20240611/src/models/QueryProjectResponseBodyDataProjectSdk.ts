// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * JAVA
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * JSSDK
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * 5.1.0
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

