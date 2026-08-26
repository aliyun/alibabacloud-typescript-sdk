// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The AI cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The model operator space.
   * 
   * @example
   * pms-xxx
   */
  modelSpace?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      modelSpace: 'ModelSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      modelSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

