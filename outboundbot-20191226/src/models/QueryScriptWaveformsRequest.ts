// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptWaveformsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Scenario voice name
   * 
   * This parameter is required.
   * 
   * @example
   * 抱歉打扰您了,稍后会有客户经理与您联系啊,再见!
   */
  scriptContent?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * This parameter is required.
   * 
   * @example
   * 5ab2d935-306c-478a-88bf-d08e4e25c1b7
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

