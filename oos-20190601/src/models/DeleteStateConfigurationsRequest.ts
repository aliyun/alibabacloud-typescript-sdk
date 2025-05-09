// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStateConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * abcde3OARpx77No54nv6
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of desired-state configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sc-asfgdhj12345"]
   */
  stateConfigurationIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      stateConfigurationIds: 'StateConfigurationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      stateConfigurationIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

