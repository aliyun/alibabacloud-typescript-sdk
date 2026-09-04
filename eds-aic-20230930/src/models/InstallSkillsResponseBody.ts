// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallSkillsResponseBodyInstallResults extends $dara.Model {
  /**
   * @remarks
   * The cloud phone instance ID.
   * 
   * @example
   * acp-6rnonvrkf59ac****
   */
  instanceId?: string;
  /**
   * @remarks
   * The installation status.
   * 
   * @example
   * INSTALLING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The installation results.
   */
  installResults?: InstallSkillsResponseBodyInstallResults[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      installResults: 'InstallResults',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      installResults: { 'type': 'array', 'itemType': InstallSkillsResponseBodyInstallResults },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.installResults)) {
      $dara.Model.validateArray(this.installResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

