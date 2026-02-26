// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

