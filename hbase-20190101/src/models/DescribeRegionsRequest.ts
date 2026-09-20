// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The supported language. Valid values:
   * 
   * - **zh-CN**: Chinese (default)
   * - **en-US**: English
   * - **ja**: Japanese.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The data engine type. Valid values:
   * - **hbase**: ApsaraDB for HBase Standard Edition or ApsaraDB for HBase single-node edition.
   * - **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition.
   * - **serverlesshbase**: ApsaraDB for HBase Serverless edition.
   * - **bds**: BDS instance.
   * 
   * @example
   * hbase
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      engine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

