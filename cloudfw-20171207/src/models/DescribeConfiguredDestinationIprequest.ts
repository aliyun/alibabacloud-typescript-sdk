// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDestinationIPRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * 1.1.1.1
   */
  destinationIP?: string;
  destinationISP?: string;
  /**
   * @example
   * cn-shenzhen
   */
  destinationRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  groupName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
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
   * 123.113.99.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      destinationIP: 'DestinationIP',
      destinationISP: 'DestinationISP',
      destinationRegion: 'DestinationRegion',
      direction: 'Direction',
      groupName: 'GroupName',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      destinationIP: 'string',
      destinationISP: 'string',
      destinationRegion: 'string',
      direction: 'string',
      groupName: 'string',
      lang: 'string',
      pageSize: 'string',
      sourceCode: 'string',
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

