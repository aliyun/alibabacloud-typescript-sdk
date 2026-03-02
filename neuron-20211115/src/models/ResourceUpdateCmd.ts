// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceUpdateCmd extends $dara.Model {
  /**
   * @example
   * http://
   */
  address?: string;
  configuration?: string;
  /**
   * @example
   * {ak:xxxx,sk:xxx}
   */
  credentials?: string;
  /**
   * @example
   * 用于统一管理资源
   */
  description?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  namespace?: string;
  /**
   * @example
   * Inner
   */
  useScope?: string;
  /**
   * @example
   * Share
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      configuration: 'configuration',
      credentials: 'credentials',
      description: 'description',
      id: 'id',
      namespace: 'namespace',
      useScope: 'useScope',
      useType: 'useType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      configuration: 'string',
      credentials: 'string',
      description: 'string',
      id: 'number',
      namespace: 'string',
      useScope: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

