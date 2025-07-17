// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenarioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * b590lhguqs@28f515462******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the business monitoring job.
   * 
   * This parameter is required.
   * 
   * @example
   * pro-content
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjaikou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario where the business monitoring job is used. Valid values:
   * 
   * *   `USER-DEFINED`: user-defined. This is the default value.
   * *   `EDAS-ROLLOUT`: application release in Enterprise Distributed Application Service (EDAS)
   * *   `OAM-ROLLOUT`: application release based on Open Application Model (OAM)
   * *   `MSC-CANARY`: canary release based on Microservice Engine (MSE)
   * 
   * @example
   * USER-DEFINED
   */
  scenario?: string;
  /**
   * @remarks
   * The code of the business monitoring job. Set this parameter when you know the code of the business monitoring job you want to query.
   * 
   * @example
   * a9f8****
   */
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

