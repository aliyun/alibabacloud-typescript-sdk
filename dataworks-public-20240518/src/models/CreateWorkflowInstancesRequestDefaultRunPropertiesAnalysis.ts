// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to block the running of the instance if the analysis fails. If you set the Type parameter to SupplementData, this parameter is required.
   * 
   * @example
   * true
   */
  blocked?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the analysis feature. If you set the Type parameter to SupplementData, this parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      blocked: 'Blocked',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocked: 'boolean',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

