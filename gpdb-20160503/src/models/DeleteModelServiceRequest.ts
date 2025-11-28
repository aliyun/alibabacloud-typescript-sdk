// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the model service to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * mx-xxxxxxxxx
   */
  modelServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      modelServiceId: 'ModelServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      modelServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

