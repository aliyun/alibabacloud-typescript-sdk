// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPluginResponseBodyDataInstallPluginResults extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-d28mjcmm1hkub84mdbi0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * pl-cvs7gbum1hkhs6us6vbg
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallPluginResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The installation results.
   */
  installPluginResults?: InstallPluginResponseBodyDataInstallPluginResults[];
  static names(): { [key: string]: string } {
    return {
      installPluginResults: 'installPluginResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installPluginResults: { 'type': 'array', 'itemType': InstallPluginResponseBodyDataInstallPluginResults },
    };
  }

  validate() {
    if(Array.isArray(this.installPluginResults)) {
      $dara.Model.validateArray(this.installPluginResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: InstallPluginResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 201CFCA0-3AF5-52D0-A0F3-FBA697AF55CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InstallPluginResponseBodyData,
      message: 'string',
      requestId: 'string',
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

