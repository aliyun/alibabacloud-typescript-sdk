// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearchParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary PolarDB cluster, which is used to locate the Search cluster associated with the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * A non-empty JSON object string where the keys are parameter names and all values must be strings, such as 10% for a percentage or 48mb for a capacity. Only parameters that are visible and modifiable in the current version template can be modified. Dynamic parameters take effect and are persisted immediately, whereas static parameters take effect after a restart triggered by the task flow. A successful response only indicates that the task has been accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * {"indices.memory.index_buffer_size":"10%","indices.memory.min_index_buffer_size":"48mb"}
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

