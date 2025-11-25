// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1734055824
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 50
   */
  limit?: string;
  /**
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @example
   * China
   */
  showCountryName?: string;
  /**
   * @example
   * in_bytes
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 117.82.14.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      limit: 'Limit',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      showCountryName: 'ShowCountryName',
      sort: 'Sort',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      limit: 'string',
      ruleResult: 'string',
      ruleSource: 'string',
      showCountryName: 'string',
      sort: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

