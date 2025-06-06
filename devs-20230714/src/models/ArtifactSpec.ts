// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArtifactSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom.debian10
   */
  runtime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC代码包、工作流yaml
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://cn-hangzhou/my-bucket/my.zip
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      runtime: 'runtime',
      type: 'type',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtime: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

