// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of data source to retrieve. This parameter is currently fixed to DingTalk.
   * 
   * @example
   * DingTalk
   */
  configType?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 39.155.*.*
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

