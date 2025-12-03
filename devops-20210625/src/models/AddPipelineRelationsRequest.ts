// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPipelineRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11,22
   */
  relObjectIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VARIABLE_GROUP
   */
  relObjectType?: string;
  static names(): { [key: string]: string } {
    return {
      relObjectIds: 'relObjectIds',
      relObjectType: 'relObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relObjectIds: 'string',
      relObjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

