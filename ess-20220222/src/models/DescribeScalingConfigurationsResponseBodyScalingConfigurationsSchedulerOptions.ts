// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * testManagedPrivateSpaceId
   */
  managedPrivateSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      managedPrivateSpaceId: 'ManagedPrivateSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedPrivateSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

