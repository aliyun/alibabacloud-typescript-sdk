// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEdgeMachineRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the cloud-native box. Valid values:
   * 
   * *   `true`: forcefully deletes the cloud-native box.
   * *   `false`: does not forcefully delete the cloud-native box.
   * 
   * Default value: `false`.
   * 
   * @example
   * true/false
   */
  force?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

