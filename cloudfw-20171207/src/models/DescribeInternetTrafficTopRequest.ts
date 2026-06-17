// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTopRequest extends $dara.Model {
  /**
   * @remarks
   * The type of traffic data.
   * 
   * This parameter is required.
   * 
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @remarks
   * The traffic direction.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1734055824
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of top entries to return. The default value is 50. Valid values: 1 to 50.
   * 
   * @example
   * 50
   */
  limit?: string;
  /**
   * @remarks
   * The action of the rule.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The source of the rule.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The name of the country to display.
   * 
   * @example
   * China
   */
  showCountryName?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * in_bytes
   */
  sort?: string;
  /**
   * @remarks
   * The tracing code for the source.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 117.82.14.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: seconds.
   * 
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

