// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProcessDefinitionsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the process definition. Valid values:
   * 
   * - MaxCompute
   * 
   * - DataService
   * 
   * - Extension
   * 
   * - Hologres
   * 
   * - EMR (You cannot create custom definitions for this type.)
   * 
   * - DataAssetGovernance (You cannot create custom definitions for this type.)
   * 
   * - Lindorm (You cannot create custom definitions for this type.)
   * 
   * - DlfNext (You cannot create custom definitions for this type.)
   * 
   * - DlfV1 (You cannot create custom definitions for this type.)
   * 
   * - StarRocks (You cannot create custom definitions for this type.)
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

