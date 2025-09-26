// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrayTrafficWeight extends $dara.Model {
  /**
   * @remarks
   * 灰度版本号
   */
  version?: string;
  /**
   * @remarks
   * 流量权重比例（0.0-1.0）
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

