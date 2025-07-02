// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceConfigsResponseBodyDataCustomResourcePackage extends $dara.Model {
  configAboutLogo?: string;
  desktopWallpaper?: string;
  loginPageBackground?: string;
  loginPageLogo?: string;
  personalCenterLogo?: string;
  startLogo?: string;
  startMenuLogo?: string;
  upgradeLogo?: string;
  static names(): { [key: string]: string } {
    return {
      configAboutLogo: 'ConfigAboutLogo',
      desktopWallpaper: 'DesktopWallpaper',
      loginPageBackground: 'LoginPageBackground',
      loginPageLogo: 'LoginPageLogo',
      personalCenterLogo: 'PersonalCenterLogo',
      startLogo: 'StartLogo',
      startMenuLogo: 'StartMenuLogo',
      upgradeLogo: 'UpgradeLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAboutLogo: 'string',
      desktopWallpaper: 'string',
      loginPageBackground: 'string',
      loginPageLogo: 'string',
      personalCenterLogo: 'string',
      startLogo: 'string',
      startMenuLogo: 'string',
      upgradeLogo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

