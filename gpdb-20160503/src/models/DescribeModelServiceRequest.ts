// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
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

