// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartAIDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. Usage notes: Add a description of the supported cluster types to the DBClusterId parameter description and clarify the meaning of the example value prefix.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

