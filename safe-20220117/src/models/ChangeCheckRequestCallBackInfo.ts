// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckRequestCallBackInfo extends $dara.Model {
  api?: string;
  apiVersion?: string;
  endPoint?: string;
  extraInfo?: string;
  popProduct?: string;
  regionId?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      apiVersion: 'ApiVersion',
      endPoint: 'EndPoint',
      extraInfo: 'ExtraInfo',
      popProduct: 'PopProduct',
      regionId: 'RegionId',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiVersion: 'string',
      endPoint: 'string',
      extraInfo: 'string',
      popProduct: 'string',
      regionId: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

