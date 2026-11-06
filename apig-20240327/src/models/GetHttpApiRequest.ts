// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to expand independent policy configurations. If this parameter is omitted or set to true, a fully compatible view is returned. If this parameter is set to false, policy references and optional read-only plug-in statuses are returned for Model API token throttling managed by policies, and the rule body can be retrieved by calling GetPolicy.
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

