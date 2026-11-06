// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSetRequestIpWhitelistRecognizers extends $dara.Model {
  autoRecognizeStatus?: string;
  ipWhitelistRecognizerType?: string;
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

export class UpdateDataSetRequest extends $dara.Model {
  dataSetDescription?: string;
  dataSetFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataSetId?: string;
  dataSetName?: string;
  dataSetStatus?: number;
  ipWhitelistRecognizers?: UpdateDataSetRequestIpWhitelistRecognizers[];
  lang?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetDescription: 'DataSetDescription',
      dataSetFileName: 'DataSetFileName',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      ipWhitelistRecognizers: 'IpWhitelistRecognizers',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetDescription: 'string',
      dataSetFileName: 'string',
      dataSetId: 'string',
      dataSetName: 'string',
      dataSetStatus: 'number',
      ipWhitelistRecognizers: { 'type': 'array', 'itemType': UpdateDataSetRequestIpWhitelistRecognizers },
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

