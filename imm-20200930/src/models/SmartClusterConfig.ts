// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FigureClusterConfig } from "./FigureClusterConfig";


export class SmartClusterConfig extends $dara.Model {
  figure?: FigureClusterConfig;
  static names(): { [key: string]: string } {
    return {
      figure: 'Figure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figure: FigureClusterConfig,
    };
  }

  validate() {
    if(this.figure && typeof (this.figure as any).validate === 'function') {
      (this.figure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

