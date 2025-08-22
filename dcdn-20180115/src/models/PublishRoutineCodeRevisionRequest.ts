// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRoutineCodeRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The environment to which you want to publish the code.
   * 
   * > 
   * 
   * *   production: the name of the environment, including the environment name (SpecName) and the domain name whitelist (AllowedHosts).
   * 
   * *   presetCanary: You can add canary release environments based on your business requirements. This parameter is optional.
   * 
   * This parameter is required.
   * 
   * @example
   * ["production","presetCanaryZhejiang"]
   */
  envs?: { [key: string]: any };
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The version of the routine code that you want to publish.
   * 
   * This parameter is required.
   * 
   * @example
   * 1620876959997924701
   */
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      envs: 'Envs',
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  validate() {
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

