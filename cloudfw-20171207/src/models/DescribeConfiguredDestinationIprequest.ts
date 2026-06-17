// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDestinationIPRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 1.1.1.1
   */
  destinationIP?: string;
  /**
   * @remarks
   * The destination ISP.
   * 
   * @example
   * telecom
   */
  destinationISP?: string;
  /**
   * @remarks
   * The destination region.
   * 
   * @example
   * cn-shenzhen
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The group name.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  groupName?: string;
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
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The trace code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
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

