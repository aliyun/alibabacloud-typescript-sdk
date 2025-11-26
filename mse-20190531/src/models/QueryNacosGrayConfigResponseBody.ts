// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNacosGrayConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * text
   */
  content?: string;
  /**
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @example
   * nacos.config.gray.label=test
   */
  grayRule?: string;
  /**
   * @example
   * Beta(IP)
   */
  grayRuleName?: string;
  /**
   * @example
   * 100
   */
  grayRulePriority?: string;
  /**
   * @example
   * Tags
   */
  grayType?: string;
  /**
   * @example
   * dubbo
   */
  group?: string;
  /**
   * @example
   * 1742277568000
   */
  lastModified?: string;
  /**
   * @example
   * 87d14faf58a103ac8840b9c5f1c2a0fe
   */
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      grayRule: 'GrayRule',
      grayRuleName: 'GrayRuleName',
      grayRulePriority: 'GrayRulePriority',
      grayType: 'GrayType',
      group: 'Group',
      lastModified: 'LastModified',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      dataId: 'string',
      grayRule: 'string',
      grayRuleName: 'string',
      grayRulePriority: 'string',
      grayType: 'string',
      group: 'string',
      lastModified: 'string',
      md5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNacosGrayConfigResponseBody extends $dara.Model {
  data?: QueryNacosGrayConfigResponseBodyData;
  /**
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryNacosGrayConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

