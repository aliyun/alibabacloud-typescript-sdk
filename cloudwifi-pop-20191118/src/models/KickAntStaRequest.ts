// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KickAntStaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4fcb82c0-ee83-11ea-88b6-02420b0f63f4
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ISV_ALIYUN_IOT
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BA:5F:40:45:63:80
   */
  staMac?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      staMac: 'StaMac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      staMac: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

