// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCampaignNumbersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6badb397-****-****-21019d382a09
   */
  campaignId?: string;
  /**
   * @example
   * 3971876649-****-****-098763a382a09
   */
  instGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  numberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instGroupId: 'InstGroupId',
      instanceId: 'InstanceId',
      numberListShrink: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instGroupId: 'string',
      instanceId: 'string',
      numberListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

