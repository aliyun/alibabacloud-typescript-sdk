// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseClientRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of servers for which you want to enable or disable the Security Center agent.
   * 
   * This parameter is required.
   * 
   * @example
   * uuid-1211-sadsd-2131
   */
  uuids?: string;
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

