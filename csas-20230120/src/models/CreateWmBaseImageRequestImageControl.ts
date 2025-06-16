// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWmBaseImageRequestImageControlLogoVisibleControl } from "./CreateWmBaseImageRequestImageControlLogoVisibleControl";
import { CreateWmBaseImageRequestImageControlTextVisibleControl } from "./CreateWmBaseImageRequestImageControlTextVisibleControl";


export class CreateWmBaseImageRequestImageControl extends $dara.Model {
  logoVisibleControl?: CreateWmBaseImageRequestImageControlLogoVisibleControl;
  textVisibleControl?: CreateWmBaseImageRequestImageControlTextVisibleControl;
  static names(): { [key: string]: string } {
    return {
      logoVisibleControl: 'LogoVisibleControl',
      textVisibleControl: 'TextVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVisibleControl: CreateWmBaseImageRequestImageControlLogoVisibleControl,
      textVisibleControl: CreateWmBaseImageRequestImageControlTextVisibleControl,
    };
  }

  validate() {
    if(this.logoVisibleControl && typeof (this.logoVisibleControl as any).validate === 'function') {
      (this.logoVisibleControl as any).validate();
    }
    if(this.textVisibleControl && typeof (this.textVisibleControl as any).validate === 'function') {
      (this.textVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

