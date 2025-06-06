// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateSourceConfig extends $dara.Model {
  /**
   * @example
   * https://api.devsapp.cn/v3/packages/start-modelscope-v3/zipball/0.1.6
   */
  downloadUrl?: string;
  /**
   * @example
   * start-springboot-cap
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

