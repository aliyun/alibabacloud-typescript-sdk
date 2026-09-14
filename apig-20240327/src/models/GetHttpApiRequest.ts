// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to expand independent policy configurations. If omitted or set to true, a complete compatibility view is returned. If set to false, the ModelAPI token throttling managed by the policy returns a policy reference and an optional read-only plugin status. You can use GetPolicy to retrieve the rule body.
   */
  expandPolicyConfigs?: boolean;
  static names(): { [key: string]: string } {
    return {
      expandPolicyConfigs: 'expandPolicyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expandPolicyConfigs: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

