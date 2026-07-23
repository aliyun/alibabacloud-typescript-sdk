// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The ER build configuration ID.
   * 
   * @example
   * 3472165674357056
   */
  routineBuildConfigurationId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routineBuildConfigurationId: 'RoutineBuildConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routineBuildConfigurationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

