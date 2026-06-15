// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * A description for the configuration set, up to 50 characters long.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * Configuration set ID. Required.
   * 
   * @example
   * XXX
   */
  id?: string;
  /**
   * @remarks
   * Associated IP pool ID. Optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * Configuration set name. Required. Up to 50 characters. The name must be unique.
   * 
   * @example
   * XXX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
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

