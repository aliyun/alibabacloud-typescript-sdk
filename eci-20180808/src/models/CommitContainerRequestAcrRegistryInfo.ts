// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CommitContainerRequestAcrRegistryInfo extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Access (ARN) of the RAM role that is assigned to the user (the authorized account) in cross-account authorization scenarios.
   * 
   * @example
   * acs:ram::1609982529******:role/role-test
   */
  arnService?: string;
  /**
   * @remarks
   * The ARN of the RAM role that is assigned to the authorizer in cross-account authorization scenarios.
   * 
   * @example
   * acs:ram::1298452580******:role/role-test
   */
  arnUser?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arnService: 'ArnService',
      arnUser: 'ArnUser',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnService: 'string',
      arnUser: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

