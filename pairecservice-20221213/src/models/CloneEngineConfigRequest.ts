// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
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

