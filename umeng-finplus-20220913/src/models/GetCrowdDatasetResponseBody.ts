// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrowdDatasetResponseBodyData extends $dara.Model {
  appId?: string;
  crowdDatasetId?: string;
  datasetIds?: string;
  description?: string;
  name?: string;
  uploadStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      crowdDatasetId: 'crowdDatasetId',
      datasetIds: 'datasetIds',
      description: 'description',
      name: 'name',
      uploadStatus: 'uploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      crowdDatasetId: 'string',
      datasetIds: 'string',
      description: 'string',
      name: 'string',
      uploadStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdDatasetResponseBody extends $dara.Model {
  code?: string;
  data?: GetCrowdDatasetResponseBodyData;
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
      code: 'string',
      data: GetCrowdDatasetResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

