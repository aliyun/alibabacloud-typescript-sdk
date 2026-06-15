// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateRequest extends $dara.Model {
  /**
   * @remarks
   * A description of the configuration set (up to 50 characters).
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The ID of an IP pool to associate with the configuration set. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The name of the configuration set. The name must be unique and can contain up to 50 characters. This parameter is required.
   * 
   * @example
   * XXX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipPoolId: 'string',
      isPublicChannelBackoff: 'boolean',
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

