// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCampaignNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The campaign ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6badb397-****-****-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * The ID of the number collection.
   * 
   * @example
   * 3971876649-****-****-098763a382a09
   */
  instGroupId?: string;
  /**
   * @remarks
   * The ID of the Cloud Call Center (CCC) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of numbers.
   */
  numberList?: string[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instGroupId: 'InstGroupId',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instGroupId: 'string',
      instanceId: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

