// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic SQL throttling feature is disabled. Valid values:
   * 
   * * **true**
   * 
   * * **false**
   * 
   * @example
   * false
   */
  configSuccess?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * cannot found instance by rm-2ze9xrhze0709****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze9xrhze0709****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

