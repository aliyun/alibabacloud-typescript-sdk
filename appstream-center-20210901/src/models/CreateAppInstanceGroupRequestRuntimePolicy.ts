// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestRuntimePolicy extends $dara.Model {
  debugMode?: string;
  perSessionPerApp?: boolean;
  /**
   * @example
   * DYNAMIC
   * 
   * **if can be null:**
   * true
   */
  persistentAppInstanceScheduleMode?: string;
  sessionPreOpen?: string;
  /**
   * @remarks
   * 会话类型。
   * 
   * @example
   * NORMAL
   */
  sessionType?: string;
  sessionUserGenerationMode?: string;
  static names(): { [key: string]: string } {
    return {
      debugMode: 'DebugMode',
      perSessionPerApp: 'PerSessionPerApp',
      persistentAppInstanceScheduleMode: 'PersistentAppInstanceScheduleMode',
      sessionPreOpen: 'SessionPreOpen',
      sessionType: 'SessionType',
      sessionUserGenerationMode: 'SessionUserGenerationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugMode: 'string',
      perSessionPerApp: 'boolean',
      persistentAppInstanceScheduleMode: 'string',
      sessionPreOpen: 'string',
      sessionType: 'string',
      sessionUserGenerationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

