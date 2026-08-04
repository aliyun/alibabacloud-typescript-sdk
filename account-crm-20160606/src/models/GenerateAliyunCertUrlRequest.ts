// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAliyunCertUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunPk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  applyChannel?: string;
  applyType?: string;
  callback?: string;
  certWay?: string;
  ignoreAlreadyCert?: boolean;
  isMobile?: boolean;
  isOpenApp?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      appName: 'AppName',
      applyChannel: 'ApplyChannel',
      applyType: 'ApplyType',
      callback: 'Callback',
      certWay: 'CertWay',
      ignoreAlreadyCert: 'IgnoreAlreadyCert',
      isMobile: 'IsMobile',
      isOpenApp: 'IsOpenApp',
      platform: 'Platform',
      source: 'Source',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      appName: 'string',
      applyChannel: 'string',
      applyType: 'string',
      callback: 'string',
      certWay: 'string',
      ignoreAlreadyCert: 'boolean',
      isMobile: 'boolean',
      isOpenApp: 'boolean',
      platform: 'string',
      source: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

