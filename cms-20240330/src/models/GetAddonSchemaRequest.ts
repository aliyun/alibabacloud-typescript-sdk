// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The language environment. Default value: zh. Valid values: zh, en.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The add-on catalog version. Valid values: v1, v2.
   * 
   * @example
   * v2
   */
  apiVersion?: string;
  /**
   * @remarks
   * The environment type. Valid values: CS (container), ECS.
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 0.1.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      apiVersion: 'apiVersion',
      environmentType: 'environmentType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      apiVersion: 'string',
      environmentType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

