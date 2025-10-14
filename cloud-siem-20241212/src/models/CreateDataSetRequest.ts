// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSetRequestIpWhitelistRecognizers extends $dara.Model {
  /**
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @example
   * current_account
   */
  recognizeScope?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecognizeStatus: 'AutoRecognizeStatus',
      ipWhitelistRecognizerType: 'IpWhitelistRecognizerType',
      recognizeScope: 'RecognizeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecognizeStatus: 'string',
      ipWhitelistRecognizerType: 'string',
      recognizeScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSetRequest extends $dara.Model {
  /**
   * @example
   * lmftest contains ip list
   */
  dataSetDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip
   */
  dataSetFieldKeyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloudsiem-dataset/1358117679873357_17433*****.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  dataSetStatus?: number;
  dataSetType?: string;
  ipWhitelistRecognizers?: CreateDataSetRequestIpWhitelistRecognizers[];
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetDescription: 'DataSetDescription',
      dataSetFieldKeyName: 'DataSetFieldKeyName',
      dataSetFileName: 'DataSetFileName',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      dataSetType: 'DataSetType',
      ipWhitelistRecognizers: 'IpWhitelistRecognizers',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetDescription: 'string',
      dataSetFieldKeyName: 'string',
      dataSetFileName: 'string',
      dataSetName: 'string',
      dataSetStatus: 'number',
      dataSetType: 'string',
      ipWhitelistRecognizers: { 'type': 'array', 'itemType': CreateDataSetRequestIpWhitelistRecognizers },
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelistRecognizers)) {
      $dara.Model.validateArray(this.ipWhitelistRecognizers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

