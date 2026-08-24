// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description can be up to 50 characters in length.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The ID of the associated IP pool. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration name. This parameter is required. The name can be up to 50 characters in length and must be unique.
   * 
   * @example
   * XXX
   */
  name?: string;
  /**
   * **if can be null:**
   * false
   */
  validationOptionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOptionShrink: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

