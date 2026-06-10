// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishAppInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @remarks
   * Deployment channel
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * Publish description
   * 
   * @example
   * CREATE_BY_NLB.nlb-jcvs5sm9l8um84zbfa
   */
  description?: string;
  /**
   * @remarks
   * Logical version number
   * 
   * @example
   * 111
   */
  logicalNumber?: number;
  /**
   * @remarks
   * Publish number
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * action
   * 
   * @example
   * BUILD
   */
  weappAction?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deployChannel: 'DeployChannel',
      description: 'Description',
      logicalNumber: 'LogicalNumber',
      publishNumber: 'PublishNumber',
      weappAction: 'WeappAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deployChannel: 'string',
      description: 'string',
      logicalNumber: 'number',
      publishNumber: 'string',
      weappAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

