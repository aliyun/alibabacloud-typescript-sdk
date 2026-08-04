// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapFromHavanaBindIdResponseBodyData extends $dara.Model {
  bindHid?: string;
  havanaBindId?: string;
  havanaBindStation?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      bindHid: 'BindHid',
      havanaBindId: 'HavanaBindId',
      havanaBindStation: 'HavanaBindStation',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindHid: 'string',
      havanaBindId: 'string',
      havanaBindStation: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MapFromHavanaBindIdResponseBody extends $dara.Model {
  code?: string;
  data?: MapFromHavanaBindIdResponseBodyData[];
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': MapFromHavanaBindIdResponseBodyData },
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

