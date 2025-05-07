// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsRDSRegion extends $dara.Model {
  /**
   * @remarks
   * The region name. The return value of this parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is cn-hangzhou, the following values are returned for the LocalName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh-CN**, the value  1()is returned for the LocalName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en-US**, the value China (Hangzhou) is returned for the LocalName parameter.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to Alibaba Cloud services in the region. For more information, see [Endpoints](https://help.aliyun.com/document_detail/610370.html).
   * 
   * @example
   * rds.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name. The return value of this parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is cn-hangzhou-j, the following values are returned for the ZoneName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh-CN**, the value   J is returned for the ZoneName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en-US**, the value Hangzhou Zone J is returned for the ZoneName parameter.
   * 
   * @example
   * Hangzhou Zone H
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

