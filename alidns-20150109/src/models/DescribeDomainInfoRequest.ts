// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether detailed attributes are required. Default value: **false**, which indicates that detailed attributes are not returned.
   * 
   * If you set this parameter to **true**, the values of the following parameters are returned: LineType, MinTtl, RecordLineTreeJson, RecordLines, LineCode, LineDisplayName, LineName, RegionLines, and SlaveDns.
   * 
   * @example
   * true
   */
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

