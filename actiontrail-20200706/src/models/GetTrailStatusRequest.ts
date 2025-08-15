// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrailStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the status of a multi-account trail. Valid values:
   * 
   * *   true: Query the status of a multi-account trail.
   * *   false: Query the status of a single-account trail. It is the default value.
   * 
   * @example
   * false
   */
  isOrganizationTrail?: boolean;
  /**
   * @remarks
   * The name of the trail.
   * 
   * The name must be 6 to 36 characters in length. The name must start with a lowercase letter and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > The name must be unique within your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isOrganizationTrail: 'IsOrganizationTrail',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOrganizationTrail: 'boolean',
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

