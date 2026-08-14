// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebRuleRequest extends $dara.Model {
  defenseId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rsType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      defenseId: 'DefenseId',
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseId: 'string',
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
      rules: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

