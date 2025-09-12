// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYzdInstanceTaskResultResponseBodyDataDownloadUrls extends $dara.Model {
  pwd?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      pwd: 'pwd',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pwd: 'string',
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

export class GetYzdInstanceTaskResultResponseBodyData extends $dara.Model {
  appid?: string;
  bcid?: string;
  datasetIds?: string;
  downloadUrls?: GetYzdInstanceTaskResultResponseBodyDataDownloadUrls[];
  resultCnt?: string;
  status?: string;
  timeDuration?: string;
  static names(): { [key: string]: string } {
    return {
      appid: 'appid',
      bcid: 'bcid',
      datasetIds: 'datasetIds',
      downloadUrls: 'downloadUrls',
      resultCnt: 'resultCnt',
      status: 'status',
      timeDuration: 'timeDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appid: 'string',
      bcid: 'string',
      datasetIds: 'string',
      downloadUrls: { 'type': 'array', 'itemType': GetYzdInstanceTaskResultResponseBodyDataDownloadUrls },
      resultCnt: 'string',
      status: 'string',
      timeDuration: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.downloadUrls)) {
      $dara.Model.validateArray(this.downloadUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYzdInstanceTaskResultResponseBody extends $dara.Model {
  code?: boolean;
  data?: GetYzdInstanceTaskResultResponseBodyData[];
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'boolean',
      data: { 'type': 'array', 'itemType': GetYzdInstanceTaskResultResponseBodyData },
      msg: 'string',
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

