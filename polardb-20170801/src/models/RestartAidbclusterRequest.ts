// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartAIDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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

