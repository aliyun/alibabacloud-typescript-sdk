// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetUpdateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description. Maximum length: 50 characters.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The configuration set ID. This parameter is required.
   * 
   * @example
   * XXX
   */
  id?: string;
  /**
   * @remarks
   * The associated IP pool ID. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration name. This parameter is required. Maximum length: 50 characters. The name must be unique.
   * 
   * @example
   * XXX
   */
  name?: string;
  validationOptionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOptionShrink: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      ipPoolId: 'string',
      isPublicChannelBackoff: 'boolean',
      name: 'string',
      validationOptionShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

