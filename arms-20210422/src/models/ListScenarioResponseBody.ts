// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenarioResponseBodyArmsScenarios extends $dara.Model {
  appId?: string;
  createTime?: string;
  extensions?: string;
  id?: number;
  name?: string;
  regionId?: string;
  sign?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      extensions: 'Extensions',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      sign: 'Sign',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      extensions: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      sign: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseBody extends $dara.Model {
  armsScenarios?: ListScenarioResponseBodyArmsScenarios[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      armsScenarios: 'ArmsScenarios',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsScenarios: { 'type': 'array', 'itemType': ListScenarioResponseBodyArmsScenarios },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.armsScenarios)) {
      $dara.Model.validateArray(this.armsScenarios);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

