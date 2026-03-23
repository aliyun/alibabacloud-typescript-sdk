// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApgroupPortalConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: number;
  appAuthUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  authKey?: string;
  authSecret?: string;
  checkUrl?: string;
  clientDownload?: number;
  clientUpload?: number;
  countdown?: number;
  network?: number;
  portalTypesShrink?: string;
  portalUrl?: string;
  timeStamp?: number;
  totalDownload?: number;
  totalUpload?: number;
  webAuthUrl?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      apgroupId: 'ApgroupId',
      appAuthUrl: 'AppAuthUrl',
      appCode: 'AppCode',
      appName: 'AppName',
      authKey: 'AuthKey',
      authSecret: 'AuthSecret',
      checkUrl: 'CheckUrl',
      clientDownload: 'ClientDownload',
      clientUpload: 'ClientUpload',
      countdown: 'Countdown',
      network: 'Network',
      portalTypesShrink: 'PortalTypes',
      portalUrl: 'PortalUrl',
      timeStamp: 'TimeStamp',
      totalDownload: 'TotalDownload',
      totalUpload: 'TotalUpload',
      webAuthUrl: 'WebAuthUrl',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'number',
      appAuthUrl: 'string',
      appCode: 'string',
      appName: 'string',
      authKey: 'string',
      authSecret: 'string',
      checkUrl: 'string',
      clientDownload: 'number',
      clientUpload: 'number',
      countdown: 'number',
      network: 'number',
      portalTypesShrink: 'string',
      portalUrl: 'string',
      timeStamp: 'number',
      totalDownload: 'number',
      totalUpload: 'number',
      webAuthUrl: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

