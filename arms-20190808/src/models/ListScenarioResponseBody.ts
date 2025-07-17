// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenarioResponseBodyArmsScenarios extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * b590lhguqs@28f515462******
   */
  appId?: string;
  /**
   * @remarks
   * The time when the business monitoring job was created.
   * 
   * @example
   * 1585214916000
   */
  createTime?: string;
  /**
   * @remarks
   * The extended information. The value is a JSON string.
   * 
   * @example
   * {"_MODE": "CUSTOM-TRANSACTION","_SCENARIO": "USER-DEFINED"}
   */
  extensions?: string;
  /**
   * @remarks
   * The ID of the business monitoring job.
   * 
   * @example
   * 132
   */
  id?: number;
  /**
   * @remarks
   * The name of the business monitoring job.
   * 
   * @example
   * k8s_deployment_css-guns-vip-main-prod_silence
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the business monitoring job.
   * 
   * @example
   * a9f8****
   */
  sign?: string;
  /**
   * @remarks
   * The time when the business monitoring job was updated.
   * 
   * @example
   * 1585214916000
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 113197164949****
   */
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
  /**
   * @remarks
   * The detailed information of the business monitoring job.
   */
  armsScenarios?: ListScenarioResponseBodyArmsScenarios[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98027D1F-3AEB-492C-A4AA-E9217992****
   */
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

