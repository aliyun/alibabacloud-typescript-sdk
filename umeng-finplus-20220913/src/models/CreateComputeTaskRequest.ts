// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeTaskRequestMorseInfoList extends $dara.Model {
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

export class CreateComputeTaskRequest extends $dara.Model {
  appId?: number;
  dataSetIds?: string;
  morseInfoList?: CreateComputeTaskRequestMorseInfoList[];
  name?: string;
  remarks?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      dataSetIds: 'dataSetIds',
      morseInfoList: 'morseInfoList',
      name: 'name',
      remarks: 'remarks',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      dataSetIds: 'string',
      morseInfoList: { 'type': 'array', 'itemType': CreateComputeTaskRequestMorseInfoList },
      name: 'string',
      remarks: 'string',
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

