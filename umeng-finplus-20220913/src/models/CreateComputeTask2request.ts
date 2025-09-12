// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeTask2RequestMorseInfoList extends $dara.Model {
  cuId?: string;
  cuVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cuId: 'cuId',
      cuVersion: 'cuVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuId: 'string',
      cuVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTask2Request extends $dara.Model {
  appId?: number;
  clientId?: number;
  dataSetIds?: string;
  morseInfoList?: CreateComputeTask2RequestMorseInfoList[];
  name?: string;
  remarks?: string;
  taskSource?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      clientId: 'clientId',
      dataSetIds: 'dataSetIds',
      morseInfoList: 'morseInfoList',
      name: 'name',
      remarks: 'remarks',
      taskSource: 'taskSource',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      clientId: 'number',
      dataSetIds: 'string',
      morseInfoList: { 'type': 'array', 'itemType': CreateComputeTask2RequestMorseInfoList },
      name: 'string',
      remarks: 'string',
      taskSource: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.morseInfoList)) {
      $dara.Model.validateArray(this.morseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

